require "bundler/setup"
require 'sinatra'
require 'mongoid'
require 'slim'

get '/' do
   slim :index
end



#Helpers
helpers do

  def link_to(url,text=url)
    "<a href=\"#{url}\" >#{text}</a>"
  end

  def css(name)
    "<link rel='stylesheet' href='/#{name}.css'>"
  end

  def image(url)
    "<img src=#{url}>"
  end

end
