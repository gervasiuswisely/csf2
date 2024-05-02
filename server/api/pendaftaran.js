export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  let bodyJson = JSON.parse(body);

  let runTimeConfig = useRuntimeConfig();
  try {
    const response = await fetch('https://api.imavi.org/cim/users/registration', {
      method: 'post',
      headers: {
        Id: process.env.APP_ID,
        Secret: process.env.APP_SECRET,
        Partner: process.env.PARTNER,
        'content-type': 'application/json',
      },
      body: JSON.stringify(bodyJson),
    });

    const data = await response.json();
    return { data: data };
  } catch (error) {
    console.error('Error fetching data:', error);
  }
});
