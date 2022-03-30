class ApplicationController < ActionController::API
  include ActionController::Cookies
  # before_action :authorized_user
  rescue_from ActiveRecord::RecordNotFound, with: :record_not_found_response
  rescue_from ActiveRecord::RecordInvalid, with: :unprocessable_entity_response

  def current_user
    # byebug
    User.find_by(id: session[:current_user])
  end

  def authorized_user
      return render json: {error: "Not Authorized"}, status: :unauthorized unless current_user
  end

  private

  def record_not_found_response
    render json: {errors: ["Not found"]}, status: :not_found
  end

  def load_session
    request.session_options[:id] = "current_user"
  end

  def unprocessable_entity_response(response)
    render json: {errors: response.record.errors.full_messages}, status: :unprocessable_entity
  end

end
