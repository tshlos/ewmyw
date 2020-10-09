if Rails.env == "production"
    Rails.application.config.session_store :cookie_store, key: "_ewmyw-backend", domain: "taci-authentication-app-api-herokuapp.com"
else
    Rails.application.config.session_store :cookie_store, key: "_ewmyw-backend"
end
