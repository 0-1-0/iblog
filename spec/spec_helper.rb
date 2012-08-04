require 'rubygems'
require 'sinatra'
require 'rack/test'
require 'slim'
require 'mongoid'

require File.join(File.dirname(__FILE__), '..', 'app.rb')
require 'rspec'


def app
    Sinatra::Application
end

RSpec.configure do |config|
  config.include Rack::Test::Methods
end