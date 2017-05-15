#!/usr/bin/env node
/* jshint esnext: true */
"use strict";
const Promise = require("bluebird"),
    request = require("request-promise"),
    sleep = require("sleep-promise"),
    jsonapi = require("./jsonapi");

const MADGLORY_TOKEN = process.env.MADGLORY_TOKEN;
if (MADGLORY_TOKEN == undefined) throw "Need an API token";

const api = module.exports;

// send a request to url with options, log data about it
// return [jsonapi parsed data, jsonapi links]
module.exports.request = async (url, options, logger) => {
    let response;
    while (true) {
        try {
            const opts = {
                uri: url,
                headers: {
                    "X-Title-Id": "semc-vainglory",
                    "Authorization": MADGLORY_TOKEN
                },
                qs: options,
                json: true,
                gzip: true,
                time: true,
                forever: true,
                strictSSL: true,
                resolveWithFullResponse: true
            };
            logger.info("API request", {
                uri: opts.uri,
                qs: opts.qs
            });
            response = await request(opts);
            return [jsonapi.parse(response.body), response.body.links];
        } catch (err) {
            response = err.response;
            if (err.statusCode == 429) {
                logger.warn("rate limited, sleeping");
                await sleep(100);  // no return, no break => retry
                continue;
            } else if (err.statusCode >= 500) {
                logger.error("API error, retrying", err);
                await sleep(100);
                continue;
            } else if (err.statusCode != 404)
                logger.error("Unexpected API response", err);
            logger.warn("not found", {
                uri: err.options.uri,
                qs: err.options.qs,
                error: err.response.body
            });
            return [undefined, undefined];
        } finally {
            if (response != undefined)  // else non-requests error
                logger.info("API response", {
                    status: response.statusCode,
                    connection_start: response.timings.connect,
                    connection_end: response.timings.end,
                    ratelimit_remaining: parseInt(response.headers["x-ratelimit-remaining"])
                });
        }
    }
}

// loop over all pages, yield jsonapi parsed data results
// TODO make it an async generator? coroutine?
module.exports.requests = async (endpoint, region, options, logger) => {
    let url = api.url(endpoint, region),
        result = [];
    do {
        const [data, links] = await api.request(url, options, logger);
        if (data == undefined) break;  // 404
        if (links == undefined) break;  // 404
        url = links.next;
        result.push(...data);
        if (links.next == undefined) break;  // last page
    } while (true);
    return result;
}

module.exports.url = (endpoint, region) =>
    "https://api.dc01.gamelockerapp.com/shards/" + region + "/" + endpoint;
