import React from 'react'
import { Bookmark, Car } from 'lucide-react'
import Card from './components/card'
import User from './components/user'

const App = () => {
  const jobs = [
  {
    
    logo: "https://1000logos.net/wp-content/uploads/2016/10/Amazon-logo-meaning.jpg",
    company: "Amazon",
    postedDate: "5 days ago",
    post: "Senior UI/UX Designer",
    tag: "Part time",
    tag2: "Senior level",
    pay: "$120/hour",
    location: "Mumbai, India",
  },
  {
    
    logo: "https://53.fs1.hubspotusercontent-na1.net/hubfs/53/image8-2.jpg",
    company: "Google",
    postedDate: "10 weeks ago",
    post: "Frontend Developer",
    tag: "Full time",
    tag2: "Junior level",
    pay: "$95/hour",
    location: "Bangalore, India",
  },
  {
    
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjzChlzw4_AmFlEk86g0TiPq7s9vBGzBlpw7N6U6Dp-muzJ4FH9Dm3Ee0&s=10",
    company: "Meta",
    postedDate: "2 days ago",
    post: "Product Designer",
    tag: "Full time",
    tag2: "Senior level",
    pay: "$140/hour",
    location: "Hyderabad, India",
  },
  {
    
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original",
    company: "Apple",
    postedDate: "1 week ago",
    post: "iOS Developer",
    tag: "Full time",
    tag2: "Senior level",
    pay: "$150/hour",
    location: "Pune, India",
  },
  {
    
    logo: "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/75/Netflix_icon.svg/500px-Netflix_icon.svg.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail",
    company: "Netflix",
    postedDate: "3 weeks ago",
    post: "Backend Engineer",
    tag: "Full time",
    tag2: "Junior level",
    pay: "$110/hour",
    location: "Mumbai, India",
  },
  {
    
    logo: "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/960px-Microsoft_logo.svg.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail",
    company: "Microsoft",
    postedDate: "4 days ago",
    post: "Cloud Solutions Architect",
    tag: "Full time",
    tag2: "Senior level",
    pay: "$135/hour",
    location: "Noida, India",
  },
  {
    
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcvJfmKzkVyvyxkJSXv9g2o6F8B1Y1dz2n9cFY7lsN_M5eXKO-FD_MYMo&s=10",
    company: "Tesla",
    postedDate: "6 days ago",
    post: "Machine Learning Engineer",
    tag: "Full time",
    tag2: "Senior level",
    pay: "$160/hour",
    location: "Bangalore, India",
  },
  {
    
    logo: "data:image/jpeg;base64,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",
    company: "Adobe",
    postedDate: "2 weeks ago",
    post: "UX Researcher",
    tag: "Part time",
    tag2: "Junior level",
    pay: "$85/hour",
    location: "Delhi, India",
  },
  {
    
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original",
    company: "IBM",
    postedDate: "8 days ago",
    post: "Data Scientist",
    tag: "Full time",
    tag2: "Senior level",
    pay: "$125/hour",
    location: "Chennai, India",
  },
  {
    
    logo: "https://iprsoftwaremedia.com/219/files/202512/692f56983d6332f89cbbc58b_nvidia-logo-horiz-wht-16x9/nvidia-logo-horiz-wht-16x9_thmb.png?v=44a60e3f-c4e5-4d8a-879f-ec5121ad6f4b",
    company: "Nvidia",
    postedDate: "12 days ago",
    post: "AI Research Engineer",
    tag: "Full time",
    tag2: "Senior level",
    pay: "$170/hour",
    location: "Mumbai, India",
  },
];
console.log(jobs);


  return (
    <div className="parent">
      {jobs.map(function(job){
        return <Card company={job.company} logo={job.logo} postedDate={job.postedDate} post={job.post} tag={job.tag} tag2={job.tag2} pay={job.pay} location={job.location} />
      })}
    


      
        
    
      
      
      
    </div>
  )
}

export default App