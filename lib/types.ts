export interface Itinerary {
  id: string;
  created_at: string;
  title: string;
  country: string[];
  description: string;
  duration_1: string;
  image_url: string | null;
  city0: string;
  status: string;
  type: "One way" | "Loop";
  nbr_countries: string;
  legs_num: string;
  leg1: string;
  leg2: string;
  leg3: string;
  leg4: string;
  leg5: string;
  leg6: string;
  leg7: string;
  leg8: string;
  leg9: string;
  leg10: string;
  duration_2: string;
  intro_dynamicpage: string | null;
  "single/multi": "single country" | "multi country";
  title_dynamicpage: string;
  total_cost: string;
  slug: string;
  titledynamicpage: string;
  map_url: string;
  map_width: number;
  map_height: number;
  extra_tip: string;
}

export interface Leg {
  uuid: string;
  created_at: string;
  legname: string;
  multileg: boolean;
  leg0: boolean;
  departurecity: string;
  arrivalcity: string;
  departurecityuuid: string;
  arrivalcityuuid: string;
  operator1type: string;
  operatorname1: string;
  operatortype2: string | null;
  operatorname2: string | null;
  direct_transfer1: string;
  direct_transfer2: string | null;
  nighttrain1: boolean;
  nighttrain2: boolean;
  operator1link: string;
  operator2link: string | null;
  step1: string | null;
  step2: string | null;
  step3: string | null;
  step4: string | null;
  multi_leg_nbr: number | null;
  fee1: string;
  duration1: string;
  departurestation_1_uuid: string;
  arrivalstation_1_uuid: string;
  operator1_text1: string;
  operator1_text2: string;
  operator2_text1: string | null;
  operator2_text2: string | null;
  fee2: string | null;
  duration2: string | null;
  operator2type: string | null;
  departurestation_2_uuid: string | null;
  arrivalstation_2_uuid: string | null;
}

export interface NewsletterState {
  success: boolean | null;
  error: string | null;
}
