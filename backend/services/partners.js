export async function fetchPartnerOffers(){
  // Simulated partner offers (replace with real API calls)
  return [
    {_id:'cpx-101', title:'CPX Survey FR', description:'Partner survey (FR)', rewardPoints:45, link:'https://cpx.example/101', location:'FR', partner:'CPX'},
    {_id:'cpx-102', title:'CPX Survey US', description:'Partner survey (US)', rewardPoints:60, link:'https://cpx.example/102', location:'US', partner:'CPX'}
  ];
}
