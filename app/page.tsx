export default async function Home() {
  const res = await fetch('http://worldtimeapi.org/api/timezone/Asia/Tehran', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })

  const data = await res.json()

  const currentTime = data.datetime

  return <main>{new Date(currentTime).toLocaleString()}</main>;
}

export const revalidate = 1;
