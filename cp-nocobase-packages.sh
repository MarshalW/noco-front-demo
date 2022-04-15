#!/bin/bash

nocobase_dir=$1

packages=(
    "utils"
    "client"
)

rm -rf node_modules/@nocobase

mkdir node_modules/@nocobase

for package in ${packages[@]}; do
    cp -r $nocobase_dir/packages/$package node_modules/@nocobase
done

cp $nocobase_dir/packages/client/src/global.less ./node_modules/@nocobase/client/esm/
cp $nocobase_dir/packages/client/src/schema-component/antd/index.less ./node_modules/@nocobase/client/esm/schema-component/antd/
cp $nocobase_dir/packages/client/src/slate/index.less ./node_modules/@nocobase/client/esm/slate/
cp $nocobase_dir/packages/client/src/board/style.less ./node_modules/@nocobase/client/esm/board/
cp $nocobase_dir/packages/client/src/schema-component/antd/calendar/style.less ./node_modules/@nocobase/client/esm/schema-component/antd/calendar/
cp $nocobase_dir/packages/client/src/schema-component/antd/calendar-v2/style.less ./node_modules/@nocobase/client/esm/schema-component/antd/calendar-v2/
cp $nocobase_dir/packages/client/src/schema-component/antd/upload/style.less ./node_modules/@nocobase/client/esm/schema-component/antd/upload/

cp $nocobase_dir/packages/client/src/slate/materialicons.woff2 ./node_modules/@nocobase/client/esm/slate