require 'spec_helper'

describe "Sinatra App" do

  it "should respond to GET" do
    get '/'
    last_response.body.should match(/Nickolay Yegorov/)
  end

end
