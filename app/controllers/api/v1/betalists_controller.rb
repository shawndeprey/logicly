class Api::V1::BetalistsController < Api::V1::BaseController
  #skip_before_filter :require_session
  #skip_before_filter :require_verification
  #skip_before_filter :require_activation
  #before_action :set_betalist, only: [:show, :edit, :update, :destroy]
  skip_before_filter :verify_authenticity_token

  # POST /api/v1/betalists.json
  def create
    @betalist = Betalist.new(betalist_params)
    if @betalist.save
      @betalist.send_notifications
      MetricsHelper::track(MetricsHelper::BETA_SIGNUP, {email: @betalist.email})
      render json: @betalist, root: :betalist, status: :created
    else
      render json: {'errors' => @betalist.errors.full_messages}, status: :unprocessable_entity
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_betalist
      @betalist = Betalist.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def betalist_params
      params.require(:betalist).permit(:email)
    end
end