class AddDistanceFromSunToStar < ActiveRecord::Migration[6.1]
  add_column :stars, :distance_from_sun, :string
end
