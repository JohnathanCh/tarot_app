class ApplicationController < ActionController::API

    def user_id
        decoded_token[0]['user_id']
    end
    
    def decoded_token
      JWT.decode(request.headers['Authorization'], 'threeseeds', true, {algorithm: 'HS256'})
    end
  
    def encoded_token(user)
      JWT.encode({user_id: user.id}, 'threeseeds', 'HS256')
    end
  
    def current_user
      @user ||= User.find_by(id: user_id)
    end
  
    def logged_in
      !!current_user
    end

end
