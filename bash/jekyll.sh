#!/usr/bin/env bash

echo "Updating OS"
sudo apt-get update

echo "Ruby Dependencies"
gpg --keyserver hkp://keys.gnupg.net --recv-keys 409B6B1796C275462A1703113804BB82D39DC0E3 7D2BAF1CF37B13E2069D6956105BD0E739499BDB
sudo apt-get install curl

echo "Installing RVM"
sudo curl -sSL https://get.rvm.io | bash -s stable
source ~/.rvm/scripts/rvm

echo "Update to Latest"
rvm get stable

echo "Install Ruby"
rvm install ruby-2.3.1

echo "RVM"
echo "Make sure to run as login"
/bin/bash --login
rvm --default use 2.3.1

echo "Ruby Gems"
echo https://rubygems.org/pages/download
echo "Navigate to downloaded file"
# in ruby gems root
ruby setup.rb

echo "Bundler"
gem install bundler

echo "Jekyll"
gem install jekyll -v 3.6.2

echo "Configure Linux Install"
echo "Add the Following to Your .bashrc"
echo export GEM_HOME=$HOME/gems
echo export PATH=$HOME/gems/bin:$PATH
sudo nano .bashrc