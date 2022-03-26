class AddMeaningToConstellations < ActiveRecord::Migration[6.1]
  add_column :constellations, :meaning, :string
end
