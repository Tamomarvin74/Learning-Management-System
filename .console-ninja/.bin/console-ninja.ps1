#!/usr/bin/env pwsh
$env:NODE_OPTIONS='--no-warnings --require "C:/Users/Tamo Marvin/.console-ninja/.bin/loader.js"'
if ($args) { Invoke-Expression "$args" }

