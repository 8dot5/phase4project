class CreateStars < ActiveRecord::Migration[6.1]
  def change
    create_table :stars do |t|
      t.string :name
      t.belongs_to :constellation, null: false, foreign_key: true
      t.string :right_ascension_hrs_mins
      t.string :declination_degs_mins
      t.float :apparent_magnitude #brighest stars have a minus apparent_magnitude 
      t.string :age
      t.float :mass_kg
      t.float :radius_km
      t.boolean :bright_star
      t.string :image_url

      t.timestamps
    end
  end
end
