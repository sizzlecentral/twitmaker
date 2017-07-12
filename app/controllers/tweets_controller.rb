class TweetsController < ApplicationController
  def index
    @tweets = Tweet.all.order(created_at: :desc)
    @tweet = Tweet.new
  end

  def create
    @tweet = Tweet.new(tweet_params)
    if request.xhr?
      respond_to do |format|

        format.html do
          if @tweet.save
            redirect_to tweets_path
          else
            render :index
          end
        end

        format.json do
          if @tweet.save
            render json: @tweet
          else
            # Address errors
          end
        end

      end
    end
  end

  def destroy
  end

  private

  def tweet_params
    params.require(:tweet).permit(:message)
  end
end
