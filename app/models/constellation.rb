class Constellation < ApplicationRecord
    has_many :stars, dependent: :destroy
end
