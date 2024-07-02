import { Link } from "react-router-dom";

function Blog({ id, title, content, name, time }) {
  return (
    <div className="flex justify-center items-center mb-3 ">
      <Link to={`/blog/${id}`}>
        <div className="flex   max-w-[650px] h-64 p-10 shadow-xl   rounded-lg">
          <div className="basis-1/4">
            <img
              className="w-60 rounded-full"
              src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIADgAOAMBEQACEQEDEQH/xAAaAAEBAQEBAQEAAAAAAAAAAAAGBQcDBAEA/8QAOBAAAQIEAwUFBgQHAAAAAAAAAQIEAAMFEQYSIRMxQWGBQlFxkaEUIjJScsEHU7HwFRYzktHS4f/EABoBAAMAAwEAAAAAAAAAAAAAAAQFBgABAwL/xAAxEQABAwIDBgYBBAMBAAAAAAABAAIDBBEFEiETIjFhcaFBUYGR0eHBFBUyQlKx8Ab/2gAMAwEAAhEDEQA/ANxjFiI4lxrIpq1taclLh0nRSifclnu5nkPOFtViLIt1mp7J5h+CvqAJJd1vc/CCP6/Vn6yXL+dY9hCsifIQlkrJ5Dq5U0GHUsIsxg9dT3U7MrNmzHN331jhmN7ozKLWsqTDEFWp6wW76dlHYmKzpPQ/aCI6yeM6OQc+HUsw3mD00PZPcM4zb1RaGr5KWztWiSD7kw8u48j5w6pMQZNuu0Kl8QwaSmBkj3m9x1+UrhikqJY+xAumtksWayl04TdS0nWWjdfxO7oYW4jVbJuRvEp5guHioftZBut7n6WYxOKzX6MWKjR2Td0Hc57MmobNpOdRkgFRJUAAL6cYJp4mPDnP4AIOrnkjyMiALnG2vDhcqvQMO0qsPTLk1aYtCUZlSjI2cy3ibiC6ejgmfZr7+lil9biVVSx3dEAT43uPwVJxDTUUirz2UqcZqZdilR36i9jzgSqhEEpYCmFBUmqpxK4Wun+BK+qqM1NHa8ztuB7x3zEcD4jcenfDvD6rbMyu4hS2M4eKaTaMG67sfL4QDEj1T+uvXCjcbUoR9KdB6D1hJWSGSdxVRh0AhpWMHlf1OqnAEgkAkDfygcAlG3C91NotSqerFnMmI+e1k+Z0jvFSyy/wahKiup6fSR9j5eKSyMI1iTQnTcSZXtDidLKk7Uf00gnf9REMW0EzYHMHEkeyTvxelfVMkJOVoPh4n6Rx5TKrRZgmOJDhsQbJmoOnRSYXvgnpzcgjmm8VVS1YytIdy+ivBMK1KzzCoqXrmUblXO/GODsx1cimhoFm+CqYVeqYYgZTQSEqmCUvmlWn3B6QTRSbOdp9EFicAmpHt8hf21+lKXfOrN8VzfxgZ176o5trCy1jA3sMzDkhLUIKrWcDjn45v3uimoNmYBl9eqhcX2wrHF/p05LjiDFjfD76UxSzMxIQFLKSEhCTe1hbXdyjzU1zad4ZlXShwmStjMue35PNI1zkobKnm+QIznTW1rwcXC10pDSXZfFHcPYpkYidT2S2RlgSytIWQsLTcDUW36iAaatbUuLMqa12FyULGy57628rFfce+wow7NS5CBNuA3HazXG7pv5RmIbPYHN6LWC7U1YLOHj05rLZWczUbO+fMMtu++kTbb3FlbvtlObgqGJmSqfXnsgiydqVo5pVqP1t0gisjMc7ghMOnE1Kx3Kx6jRIPw2qklq8cMZ6gj2nKZZPFQvp1v6QbhU7WuMZ8Uq/9BSuexszf68eiY16TSkmQ8qjIThLWEibsivZjfdVuzDadsWj5G3/AAp+kfUm8cL7X8L2v05rocQUbY7T+KM8lvzkxv8AUw/5D3Xn9BVXts3X6Fc6DIpeSa6pbISEzFEFZlFG0A4i/ZjUDYrF0bbLdZJUXDJ33tzvb7Qr8RqpJeVGQ0bqCw1Cs6huzG2nS0KMUna94Y3wVJgFK6KJ0rv7Wt0Cj4TZKf4hZSgCUomCavklOv62HWBKGIyTtHlqj8UnENI8+YsPVOcd4fVVGqXjNGZ23Fikb5iO7xG8dYc4hSbZmZvEKawbEBTSbOQ7rux8/lZfqDxBHpE5qCrXQhJqXjeqsZaZU/I8lp0G1uF/3D73hjDicsYs7UJLU4FTTHMzdPLh7Kj/AD43vtBQ5W1+baj/AFgj91Zx2ev/AHJCfsEnDbadPtTatjWq1CWqVKKGkpWhEn4iPq/xaB5sTlkFm6BGU2B00JzO3jz4eyNgEkAAkncBxhdqSnOgC1PA2H1Uhkpw7TZ44AzJ/LTwT48T/wAikoKXYMu7iVEYxiAqpcjP4t7nz+Enhgk6K4lwY2qi1OmSktnatVae5MPMcDzHrC6qw9k283Qp1h+MyUwEcm83uOnwgj/DdYYKInMJy0jtyU7RJ8t3W0JpKKeM6t9lTQYnSTDdeB10/wBqZspmfZ7Nef5cpv5QNlde1kbnbbNfRVKfhmsv1ASmM2Wk9ueNmkeep6AwTFQzyHRtuqBnxSkhG88E+Q1T3DWDmtIWly6UHLwfCq3uS/pHfzPpDqloGQbx1KmMQxiWqGRm63uevwk8MEnX/9k="
              alt="image"
            />
          </div>
          <div className=" basis-8/12 ml-4">
            <div className="text-5xl mb-3">{title}</div>
            <div className="text-3xl mb-2">{content}</div>
            <div className="font-light mx-1 ">
              {name}.{time}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Blog;
