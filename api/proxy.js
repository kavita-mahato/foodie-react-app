export default async function handler(req, res) {
  const { lat, lng } = req.query;
  const url = `https://www.swiggy.com/dapi/restaurants/list/v5?lat=${lat || "23.6668272"}&lng=${lng || "86.14560349999999"}&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`;

  try {
    const response = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
        "User-Agent": "Mozilla/5.0",
      },
    });
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch data" });
  }
}