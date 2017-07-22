#!/bin/bash

echo Requires rimraf, protoc, protobufjs
rimraf ./dist
mkdir dist

for proto in `ls src/*.proto -x`; do
  proto=${proto:4}
  protoc --proto_path=./ --include_imports=true --descriptor_set_out=./dist/${proto%.*}.desc ./src/${proto}
  pbjs -t static-module -w commonjs -o ./dist/${proto%.*}.js ./src/${proto}
  pbts -o ./dist/${proto%.*}.d.ts ./dist/${proto%.*}.js
done

echo "Done"
