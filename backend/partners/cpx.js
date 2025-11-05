export async function fetchCpxOffers(apiKey='') {
  return [
    { id: 'cpx-101', title: 'CPX Survey FR', description: 'Partner survey (FR)', reward_points: 45, link: 'https://cpx.example/offer101', location: 'FR', status: 'active' },
    { id: 'cpx-102', title: 'CPX Survey US', description: 'Partner survey (US)', reward_points: 60, link: 'https://cpx.example/offer102', location: 'US', status: 'active' }
  ];
}
