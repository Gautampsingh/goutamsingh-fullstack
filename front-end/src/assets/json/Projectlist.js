import img_cgi from '../images/portfolio/cgiiap3.jpg';
import img_danske from '../images/portfolio/danskebank.png';
import img_geHealth from '../images/portfolio/gehealthcare.jpg';
import img_nbc from '../images/portfolio/nbc.JPG';
import img_aviation from '../images/portfolio/geaviation2.jpg';
import img_intel from '../images/portfolio/intel1.png';

const ProjectList = [
    { 
        title: 'Intelligent Automation Platform', 
        subtitle: "ERP", 
        description: "IAP monitoring services helps organisations in managing complex IT infrastructure that include heterogeneous applications and network devices by implementing advanced troubleshooting methodologies and relevant technology and domain related expertise.", 
        location: "Sweden",
        duration: "Project duration: September 2017 - Present",
        imgUrl: img_cgi,
        bgcolor: {
            backgroundColor: '#743828',
            color: '#bcc4ca'
        }
    },
    { 
        title: 'Dankse Bank',
        subtitle: "Banking and Finance",
        description: "Danske Bank is a Nordic bank with strong local roots and bridges to the rest of the world. We have migrated the application using the new technologies and the sitecore tool. We have developed the application in multiple localizations including dk, fi, co.uk, se.",
        location: "Denmark",
        duration: "Project duration: June 2015 - September 2017",
        imgUrl: img_danske,
        bgcolor: {
            backgroundColor: '#52a8d3',
            color: '#383737'
        }
    },
    { 
        title: 'General Electric', 
        subtitle: "Healthcare", 
        description: "GE Healthcare is the $19 billion healthcare business of GE (NYSE: GE). As a leading provider of medical imaging, monitoring, biomanufacturing, and cell and gene therapy technologies, GE Healthcare enables precision health in diagnostics, therapeutics and monitoring through intelligent devices, data analytics, applications and services.", 
        location: "Bengaluru",
        duration: "Project duration: June 2013 - September 2014",
        imgUrl: img_geHealth,
        bgcolor: {
            backgroundColor: '#2bb1b8',
            color: '#534040'
        }
    },
    { 
        title: 'National Bank of Canada', 
        subtitle: "Banking", 
        description: "The National Bank of Canada (French: Banque Nationale du Canada) is the sixth largest commercial bank in Canada. It is headquartered in Montreal, and has branches in most Canadian provinces and 2.4 million personal clients.[4] National Bank is the largest bank in Quebec, and the second largest financial institution in the province.", 
        location: "Canada",
        duration: "Project duration: January 2013 - June 2013",
        imgUrl: img_nbc,
        bgcolor: {
            backgroundColor: '#6eb1d3'
        }
    },
    { 
        title: 'General Electric', 
        subtitle: "Aviation", 
        description: "With a broad range of avionics, power, and structures products, GE Aviation's Systems portfolio is bringing the future of flight to today's commercial aircraft. From Integrated Propulsion Systems that create unprecedented engine energy efficiencies to advanced flight management systems that enhance the capacity of the skies, GE provides the advanced technologies critical to superior aircraft performance and is poised to take civil aviation to the next level.",
        location: "Evendale, Ohio",
        duration: "Project duration: September 2014 - January 2015",
        imgUrl: img_aviation,
        bgcolor: {
            backgroundColor: '#514d41',
            color: '#e7e2e2'
        }
    },
    { 
        title: 'Intel Innovation', 
        subtitle: "AEM", 
        description: "Intel® technology enables Trusted Infrastructure through a suite of platform security technologies built into Intel® silicon. Hardware-based security technologies provide a critical foundation for secure IT. They address the numerous, increasing, and evolving security threats across physical and virtual infrastructures.",
        location: "Canada",
        duration: "Project duration: February 2013 - January 2014",
        imgUrl: img_intel,
        bgcolor: {
            backgroundColor: '#95be81',
            color:'#4b3c3c'
        }
    }
]

export default ProjectList;