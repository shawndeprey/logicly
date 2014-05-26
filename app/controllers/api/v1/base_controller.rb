class Api::V1::BaseController < ApplicationController
  # This is the base API V3 API controller
  # We can do stuff like check authentication, or headers, or whatnot,
  # things that we would do on every request, instead of doing it
  # in each controller individually.

  # We only want the API to respond to JSON
  respond_to :json

  #def load_session_user
  #  @user = current_user
  #end
end
