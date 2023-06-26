import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (endpoint, query, useSavedData = false) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const options = {
    method: 'GET',
    url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    headers: {
      'X-RapidAPI-Key': '',
      'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
    },
    params: {
      ...query
    }
  };

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await axios.request(options);
      setData(response.data.data);
      setIsLoading(false);
    } catch (error) {
      setError(error);
      alert("Something went wrong, please try again later");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (useSavedData) {
      // Load data from saved source (e.g., local storage)
      const savedData = [
    {
    job_title: "React Developer (Full Stack)",
    employer_company_type: "Mining",
    employer_logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKlgydP7sElaJC9qPrtNHwBhyTMHYgii1RPWsy&s=0",
    employer_name: "Dice",
    employer_website: "http://www.natfuel.com",
    job_apply_is_direct: false,
    job_apply_link: "https://www.linkedin.com/jobs/view/react-developer-full-stack-at-seneca-resources-3643968217",
    job_apply_quality_score: 0.586,
    job_benefits: null,
    job_city: null,
    job_country: "US",
    job_employment_type: "FULLTIME",
    job_experience_in_place_of_education: false,
    job_google_link: "https://www.google.com/search?gl=us&hl=en&rciv=jb&q=react+developer&start=0&ibp=htl;jobs#fpstate=tldetail&htivrt=jobs&htiq=react+developer&htidocid=GJC1rxqaS_4AAAAAAAAAAA%3D%3D",
    job_id: "GJC1rxqaS_4AAAAAAAAAAA==",
    job_is_remote: true,
    job_job_title: null,
    job_latitude: 37.09024,
    job_longitude: -95.71289,
    job_max_salary: null,
    job_min_salary: null,
    job_naics_code: "211111",
    job_naics_name: "Crude Petroleum and Natural Gas Extraction",
    job_offer_expiration_datetime_utc: "2023-07-23T15:00:47.000Z",
    job_offer_expiration_timestamp: 1690124447,
    job_onet_job_zone: "4",
    job_onet_soc: "15113300",
    job_posted_at_datetime_utc: "2023-06-23T15:00:47.000Z",
    job_posted_at_timestamp: 1687532447,
    job_posting_language: "en",
    job_publisher: "LinkedIn",
    job_required_education: {
      associates_degree: false,
      bachelors_degree: true,
      degree_mentioned: true,
      degree_preferred: true,
      high_school: false,
      postgraduate_degree: false
    },
    job_highlights: {
      Qualifications: [
        "They look for someone who loves to learn and is passionate about keeping up to date with industry trends and technology",
        "BS in computer science or related field",
        "3+ years of experience building full-stack applications using JavaScript technologies",
        "3+ years of experience with React development",
        "Ability to obtain and maintain a Public Trust",
        "AWS services (S3, CloudFront, Lambda, API Gateway, RDS)",
        "MySQL",
        "Node.js",
        "GraphQL/Rest",
        "JavaScript, HTML, CSS",
      ],
      Responsibilities: [
        "This developer will participate in building and modernizing web-based applications to support our projects, work with technical leads to develop and enforce standards, collaborate with a development team, and follow solutions as they are developed through production deployment",
        "The team performs custom software development to modernize siloed, legacy applications using modular design standards",
        "The team works closely with clients and other contractors to ensure the performance and reliability of public-facing, mission-critical applications",
        "Identifies requirements by establishing personal rapport with potential and actual clients and with other persons in a position to understand service requirements",
        "Develops and maintains applications and databases by evaluating client needs; analyzing requirements; developing software systems",
        "Bug fixing, browser testing, accessibility testing",
        "Documenting code and processes",
        "Collaborate with designers, developers, and project managers on client work",
        "Communicating with co-workers about your projects and tasks",
        "Actively participate in project discussions and team meetings (e.g., daily standups, code reviews)",
      ],
    }
  }
];

      setData(savedData);
      setIsLoading(false);
    } else {
      // Fetch data from the API
      fetchData();
    }
  }, [useSavedData]);

  const refetch = () => {
    setIsLoading(true);
    fetchData();
  };

  return { data, isLoading, error, refetch };
};

export default useFetch;
