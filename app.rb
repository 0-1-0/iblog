require 'sinatra'
require 'slim'
require 'haml'
require "digest/sha1"
require 'dm-core'
require 'dm-validations'
require 'dm-timestamps'
require 'dm-migrations'
require "sinatra-authentication"

#for authentification
use Rack::Session::Cookie, :secret => '3daystospace'


################rounting##########################

get '/' do
   slim :index
end


##################################################



###################Datamapper#####################
DataMapper.setup(:default, ENV['DATABASE_URL'] || 'postgres://developer:123@localhost/iblog')

class Post
  include DataMapper::Resource

  property :id,       Serial
  property :title,    String
  property :body,     Text   , :lazy => [ :show ]
  property :published,Boolean, :default  => false
  
  timestamps :at
end
DataMapper.auto_upgrade!

#################################################

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
