#!/usr/bin/env node
const cac = require("cac");
const client = require("cheerio-httpcli");
const { join } = require("path");

const cli = cac();

const host = "www.natorisana.love";
const protocol = "http";
const ext = "mp3";

const defaultCommand = cli.command(
  "*",
  {
    desc: "Show sana button resource list."
  },
  () => {
    client.fetch(`${protocol}://${host}`, function(err, $, res) {
      $(".sounds").each(function(val) {
        console.log(
          protocol + "://" + join(host, `${$(this).attr()["data-file"]}.${ext}`)
        );
      });
    });
  }
);

cli.parse();
