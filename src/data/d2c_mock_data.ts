export interface DailyMetric {
  date: string;
  totalOrders: number;
  codOrders: number;
  prepaidOrders: number;
  ndrLogged: number;
  rescuedOrders: number;
  finalRto: number;
  capitalSavedInr: number;
  codToUpiConverted: number;
}

export interface NdrReason {
  reason: string;
  count: number;
  percentage: number;
  rescueRate: number;
  color: string;
}

export interface FunnelStage {
  stage: string;
  count: number;
  percentage: number;
  conversionFromPrevious: number;
  description: string;
}

export interface CarrierPerformance {
  carrier: string;
  totalShipments: number;
  ndrRate: number;
  fakeAttemptRate: number;
  rescueSuccessRate: number;
  avgSlaDays: number;
  capitalRescuedInr: number;
  status: 'optimal' | 'warning' | 'critical';
}

export interface RiskPincode {
  pincode: string;
  city: string;
  state: string;
  volume: number;
  rtoRate: number;
  codShare: number;
  riskTier: 'Critical' | 'High' | 'Medium' | 'Low';
  actionRecommended: 'Strict UPI Only' | 'Pre-call Verification' | 'Standard NDR' | 'Normal';
}

export interface LiveRescueEvent {
  id: string;
  timestamp: string;
  orderId: string;
  city: string;
  carrier: string;
  reason: string;
  customerAction: string;
  resolutionTimeSec: number;
  savedValueInr: number;
}

// 30 Days of Timeline Data
export const DAILY_LOGISTICS_TREND: DailyMetric[] = [
  { date: 'Sep 19', totalOrders: 780, codOrders: 540, prepaidOrders: 240, ndrLogged: 220, rescuedOrders: 118, finalRto: 102, capitalSavedInr: 141600, codToUpiConverted: 42 },
  { date: 'Sep 20', totalOrders: 810, codOrders: 565, prepaidOrders: 245, ndrLogged: 235, rescuedOrders: 129, finalRto: 106, capitalSavedInr: 154800, codToUpiConverted: 48 },
  { date: 'Sep 21', totalOrders: 920, codOrders: 640, prepaidOrders: 280, ndrLogged: 265, rescuedOrders: 145, finalRto: 120, capitalSavedInr: 174000, codToUpiConverted: 56 },
  { date: 'Sep 22', totalOrders: 890, codOrders: 615, prepaidOrders: 275, ndrLogged: 250, rescuedOrders: 138, finalRto: 112, capitalSavedInr: 165600, codToUpiConverted: 51 },
  { date: 'Sep 23', totalOrders: 795, codOrders: 550, prepaidOrders: 245, ndrLogged: 225, rescuedOrders: 122, finalRto: 103, capitalSavedInr: 146400, codToUpiConverted: 44 },
  { date: 'Sep 24', totalOrders: 830, codOrders: 570, prepaidOrders: 260, ndrLogged: 238, rescuedOrders: 131, finalRto: 107, capitalSavedInr: 157200, codToUpiConverted: 49 },
  { date: 'Sep 25', totalOrders: 860, codOrders: 590, prepaidOrders: 270, ndrLogged: 245, rescuedOrders: 136, finalRto: 109, capitalSavedInr: 163200, codToUpiConverted: 53 },
  { date: 'Sep 26', totalOrders: 940, codOrders: 650, prepaidOrders: 290, ndrLogged: 270, rescuedOrders: 151, finalRto: 119, capitalSavedInr: 181200, codToUpiConverted: 61 },
  { date: 'Sep 27', totalOrders: 980, codOrders: 680, prepaidOrders: 300, ndrLogged: 285, rescuedOrders: 162, finalRto: 123, capitalSavedInr: 194400, codToUpiConverted: 68 },
  { date: 'Sep 28', totalOrders: 1020, codOrders: 710, prepaidOrders: 310, ndrLogged: 298, rescuedOrders: 170, finalRto: 128, capitalSavedInr: 204000, codToUpiConverted: 72 },
  { date: 'Sep 29', totalOrders: 880, codOrders: 610, prepaidOrders: 270, ndrLogged: 252, rescuedOrders: 140, finalRto: 112, capitalSavedInr: 168000, codToUpiConverted: 54 },
  { date: 'Sep 30', totalOrders: 850, codOrders: 590, prepaidOrders: 260, ndrLogged: 240, rescuedOrders: 134, finalRto: 106, capitalSavedInr: 160800, codToUpiConverted: 52 },
  { date: 'Oct 01', totalOrders: 910, codOrders: 630, prepaidOrders: 280, ndrLogged: 260, rescuedOrders: 146, finalRto: 114, capitalSavedInr: 175200, codToUpiConverted: 58 },
  { date: 'Oct 02', totalOrders: 870, codOrders: 605, prepaidOrders: 265, ndrLogged: 248, rescuedOrders: 139, finalRto: 109, capitalSavedInr: 166800, codToUpiConverted: 55 },
  { date: 'Oct 03', totalOrders: 930, codOrders: 645, prepaidOrders: 285, ndrLogged: 268, rescuedOrders: 152, finalRto: 116, capitalSavedInr: 182400, codToUpiConverted: 63 },
  { date: 'Oct 04', totalOrders: 990, codOrders: 690, prepaidOrders: 300, ndrLogged: 288, rescuedOrders: 164, finalRto: 124, capitalSavedInr: 196800, codToUpiConverted: 69 },
  { date: 'Oct 05', totalOrders: 1050, codOrders: 730, prepaidOrders: 320, ndrLogged: 305, rescuedOrders: 175, finalRto: 130, capitalSavedInr: 210000, codToUpiConverted: 76 },
  { date: 'Oct 06', totalOrders: 1120, codOrders: 780, prepaidOrders: 340, ndrLogged: 325, rescuedOrders: 188, finalRto: 137, capitalSavedInr: 225600, codToUpiConverted: 82 },
  { date: 'Oct 07', totalOrders: 1080, codOrders: 750, prepaidOrders: 330, ndrLogged: 312, rescuedOrders: 179, finalRto: 133, capitalSavedInr: 214800, codToUpiConverted: 78 },
  { date: 'Oct 08', totalOrders: 960, codOrders: 665, prepaidOrders: 295, ndrLogged: 275, rescuedOrders: 156, finalRto: 119, capitalSavedInr: 187200, codToUpiConverted: 65 },
  { date: 'Oct 09', totalOrders: 920, codOrders: 640, prepaidOrders: 280, ndrLogged: 262, rescuedOrders: 148, finalRto: 114, capitalSavedInr: 177600, codToUpiConverted: 60 },
  { date: 'Oct 10', totalOrders: 950, codOrders: 660, prepaidOrders: 290, ndrLogged: 272, rescuedOrders: 154, finalRto: 118, capitalSavedInr: 184800, codToUpiConverted: 64 },
  { date: 'Oct 11', totalOrders: 1010, codOrders: 700, prepaidOrders: 310, ndrLogged: 292, rescuedOrders: 167, finalRto: 125, capitalSavedInr: 200400, codToUpiConverted: 71 },
  { date: 'Oct 12', totalOrders: 1070, codOrders: 745, prepaidOrders: 325, ndrLogged: 310, rescuedOrders: 180, finalRto: 130, capitalSavedInr: 216000, codToUpiConverted: 79 },
  { date: 'Oct 13', totalOrders: 1140, codOrders: 790, prepaidOrders: 350, ndrLogged: 332, rescuedOrders: 194, finalRto: 138, capitalSavedInr: 232800, codToUpiConverted: 86 },
  { date: 'Oct 14', totalOrders: 1180, codOrders: 820, prepaidOrders: 360, ndrLogged: 345, rescuedOrders: 202, finalRto: 143, capitalSavedInr: 242400, codToUpiConverted: 91 },
  { date: 'Oct 15', totalOrders: 1210, codOrders: 840, prepaidOrders: 370, ndrLogged: 352, rescuedOrders: 208, finalRto: 144, capitalSavedInr: 249600, codToUpiConverted: 95 },
  { date: 'Oct 16', totalOrders: 1150, codOrders: 800, prepaidOrders: 350, ndrLogged: 335, rescuedOrders: 196, finalRto: 139, capitalSavedInr: 235200, codToUpiConverted: 88 },
  { date: 'Oct 17', totalOrders: 1090, codOrders: 760, prepaidOrders: 330, ndrLogged: 318, rescuedOrders: 184, finalRto: 134, capitalSavedInr: 220800, codToUpiConverted: 81 },
  { date: 'Oct 18', totalOrders: 1130, codOrders: 785, prepaidOrders: 345, ndrLogged: 328, rescuedOrders: 191, finalRto: 137, capitalSavedInr: 229200, codToUpiConverted: 85 }
];

export const NDR_REASONS_BREAKDOWN: NdrReason[] = [
  { reason: 'Customer Unavailable', count: 3418, percentage: 42.0, rescueRate: 64.2, color: '#27cbce' },
  { reason: 'Premises Closed / Locked', count: 2116, percentage: 26.0, rescueRate: 58.5, color: '#38bdf8' },
  { reason: 'Incomplete / Invalid Address', count: 1465, percentage: 18.0, rescueRate: 51.4, color: '#f59e0b' },
  { reason: 'Delivery Deferred by Buyer', count: 814, percentage: 10.0, rescueRate: 72.0, color: '#10b981' },
  { reason: 'Refused - Cash Not Ready', count: 327, percentage: 4.0, rescueRate: 46.8, color: '#f43f5e' }
];

export const AUTONOMOUS_FUNNEL_STAGES: FunnelStage[] = [
  { stage: '1. Courier NDR Logged', count: 8140, percentage: 100, conversionFromPrevious: 100, description: 'Delivery failure webhook received from carrier' },
  { stage: '2. WhatsApp Intercept Sent', count: 8026, percentage: 98.6, conversionFromPrevious: 98.6, description: 'Dispatched via Meta Cloud API in < 90 seconds' },
  { stage: '3. Buyer Engaged / Read', count: 6245, percentage: 76.7, conversionFromPrevious: 77.8, description: 'Customer opened chat and reviewed reschedule options' },
  { stage: '4. Action Confirmed (Slot/UPI)', count: 4890, percentage: 60.1, conversionFromPrevious: 78.3, description: 'Verified delivery date or converted to instant UPI' },
  { stage: '5. Re-synced with Carrier', count: 4720, percentage: 58.0, conversionFromPrevious: 96.5, description: 'API payload synced with Shiprocket/Delhivery/Bluedart' },
  { stage: '6. Doorstep Delivery Success', count: 4379, percentage: 53.8, conversionFromPrevious: 92.8, description: 'Order successfully delivered; RTO permanently avoided' }
];

export const CARRIER_PERFORMANCE_METRICS: CarrierPerformance[] = [
  { carrier: 'Delhivery', totalShipments: 10420, ndrRate: 26.2, fakeAttemptRate: 14.8, rescueSuccessRate: 56.4, avgSlaDays: 2.8, capitalRescuedInr: 1845600, status: 'optimal' },
  { carrier: 'Blue Dart', totalShipments: 6850, ndrRate: 19.5, fakeAttemptRate: 8.2, rescueSuccessRate: 62.8, avgSlaDays: 2.1, capitalRescuedInr: 1324800, status: 'optimal' },
  { carrier: 'Shadowfax', totalShipments: 5240, ndrRate: 31.4, fakeAttemptRate: 22.4, rescueSuccessRate: 48.6, avgSlaDays: 3.4, capitalRescuedInr: 962400, status: 'warning' },
  { carrier: 'Xpressbees', totalShipments: 3940, ndrRate: 29.8, fakeAttemptRate: 18.6, rescueSuccessRate: 51.2, avgSlaDays: 3.2, capitalRescuedInr: 763200, status: 'warning' },
  { carrier: 'Ekart Logistics', totalShipments: 2000, ndrRate: 24.0, fakeAttemptRate: 12.0, rescueSuccessRate: 54.0, avgSlaDays: 2.9, capitalRescuedInr: 396000, status: 'optimal' }
];

export const TOP_RISK_PINCODES: RiskPincode[] = [
  { pincode: '800001', city: 'Patna', state: 'Bihar', volume: 640, rtoRate: 41.2, codShare: 88.5, riskTier: 'Critical', actionRecommended: 'Strict UPI Only' },
  { pincode: '250002', city: 'Meerut', state: 'Uttar Pradesh', volume: 520, rtoRate: 38.6, codShare: 84.0, riskTier: 'Critical', actionRecommended: 'Strict UPI Only' },
  { pincode: '395003', city: 'Surat', state: 'Gujarat', volume: 780, rtoRate: 36.4, codShare: 81.2, riskTier: 'Critical', actionRecommended: 'Pre-call Verification' },
  { pincode: '208001', city: 'Kanpur', state: 'Uttar Pradesh', volume: 490, rtoRate: 35.8, codShare: 82.5, riskTier: 'High', actionRecommended: 'Pre-call Verification' },
  { pincode: '226001', city: 'Lucknow', state: 'Uttar Pradesh', volume: 610, rtoRate: 33.2, codShare: 79.0, riskTier: 'High', actionRecommended: 'Pre-call Verification' },
  { pincode: '302001', city: 'Jaipur', state: 'Rajasthan', volume: 830, rtoRate: 28.5, codShare: 72.4, riskTier: 'Medium', actionRecommended: 'Standard NDR' },
  { pincode: '411001', city: 'Pune', state: 'Maharashtra', volume: 1120, rtoRate: 14.2, codShare: 54.0, riskTier: 'Low', actionRecommended: 'Normal' },
  { pincode: '560001', city: 'Bangalore', state: 'Karnataka', volume: 1840, rtoRate: 11.8, codShare: 46.2, riskTier: 'Low', actionRecommended: 'Normal' },
  { pincode: '110001', city: 'Delhi', state: 'Delhi', volume: 1650, rtoRate: 15.6, codShare: 52.8, riskTier: 'Low', actionRecommended: 'Normal' },
  { pincode: '201301', city: 'Noida', state: 'Uttar Pradesh', volume: 920, rtoRate: 16.4, codShare: 55.0, riskTier: 'Low', actionRecommended: 'Normal' }
];

export const LIVE_RESCUE_STREAM: LiveRescueEvent[] = [
  { id: 'EV-9021', timestamp: 'Just now', orderId: 'ORD-77492', city: 'Patna', carrier: 'Delhivery', reason: 'Customer Unavailable', customerAction: 'Rescheduled to Tomorrow 2 PM', resolutionTimeSec: 42, savedValueInr: 1250 },
  { id: 'EV-9020', timestamp: '2m ago', orderId: 'ORD-77488', city: 'Surat', carrier: 'Shadowfax', reason: 'Refused - Cash Not Ready', customerAction: 'Converted to Instant UPI (₹899 Paid)', resolutionTimeSec: 68, savedValueInr: 899 },
  { id: 'EV-9019', timestamp: '4m ago', orderId: 'ORD-77483', city: 'Meerut', carrier: 'Xpressbees', reason: 'Incomplete Address', customerAction: 'Shared Live GPS Pin & House #', resolutionTimeSec: 51, savedValueInr: 1650 },
  { id: 'EV-9018', timestamp: '7m ago', orderId: 'ORD-77479', city: 'Lucknow', carrier: 'Blue Dart', reason: 'Premises Closed', customerAction: 'Requested Delivery to Neighbor', resolutionTimeSec: 36, savedValueInr: 2100 },
  { id: 'EV-9017', timestamp: '11m ago', orderId: 'ORD-77472', city: 'Kanpur', carrier: 'Delhivery', reason: 'Customer Unavailable', customerAction: 'Rescheduled to Monday Morning', resolutionTimeSec: 59, savedValueInr: 1420 }
];
