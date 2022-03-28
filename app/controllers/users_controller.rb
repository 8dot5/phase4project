class UsersController < ApplicationController

    def create
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :created
    end

    def show
        render json: find_user, status: :ok
    end

    def destroy
        find_user.destroy!
        render json: {}, status: :gone
    end

    private

    def find_user
        User.find(params[:id])
    end

    def user_params
        params.permit(:username, :password, :confirm_password)
    end

end
