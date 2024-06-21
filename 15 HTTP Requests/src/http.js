export async function fetchData() {
  const res = await fetch('http://localhost:3000/places');
  const data = await res.json();

  if (!res.ok) throw new Error('Failed to fetch places');

  return data.places;
}

export async function fetchUserData() {
  const res = await fetch('http://localhost:3000/user-places');
  const data = await res.json();

  if (!res.ok) throw new Error('Failed to fetch User places');

  return data.places;
}

export async function updateUserPlaces(places) {
  const res = await fetch('http://localhost:3000/user-places', {
    method: 'PUT',
    body: JSON.stringify({ places: places }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const resData = await res.json();
  if (!res.ok) throw new Error('Failed to update User Place');

  return resData.message;
}
