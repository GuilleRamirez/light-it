export const fetchPatients = async () => {
  try {
    const response = await fetch(
      'https://63bedcf7f5cfc0949b634fc8.mockapi.io/users'
    );
    return await response.json();
  } catch (error) {
    console.error('Error fetching patients:', error);
    return [];
  }
};
