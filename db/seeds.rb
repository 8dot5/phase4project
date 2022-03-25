# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts "🗑️ Deleting previous data..."
Constellation.destroy_all
Star.destroy_all
User.destroy_all

puts "🪐 ✨ Creating Constellations..."
Constellation.create()

puts "⭐ ✨ Creating Stars..."
Star.create()

puts "👤 Creating Users..."
User.create()

puts "✅ Done seeding!"