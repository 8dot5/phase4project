class ConstellationsController < ApplicationController

    def show
        render json: find_constellation, status: :ok
    end

    def index
        render json: Constellation.all, status: :ok
    end

    def update
        find_constellation.update(constellation_params)
        render json: find_constellation
    end

    private
    def find_constellation
        Constellation.find(params[:id])
    end

    def constellation_params
        params.permit(:image_url, :meaning, :main_stars)
    end

end
