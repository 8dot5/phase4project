class User < ApplicationRecord
    has_secure_password
    
    # validates :username, uniqueness: true
    # TODO: add validations
    # validates :password
end
