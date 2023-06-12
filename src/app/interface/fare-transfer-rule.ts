export interface FareTransferRule {
  from_leg_group_id: string,
  to_leg_group_id: string,
  transfer_count: string,
  duration_limit: string,
  duration_limit_type: string,
  fare_transfer_type: string,
  fare_product_id: string,
  session_id: string,
}
