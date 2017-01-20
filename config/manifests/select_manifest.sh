#!/bin/bash

if [ $TRAVIS_BRANCH == 'production' ]; then
  cp config/manifests/_production.yml manifest.yml
elif [ $TRAVIS_BRANCH == 'test' ]; then
  cp config/manifests/_test.yml manifest.yml
else
  cp config/manifests/_development.yml manifest.yml
fi