import React from 'react'
import PropTypes from 'prop-types'
import WindowScreen from '../../components/WindowScreen'
import HoverImage from '../../components/HoverImage'
import ViewsTitle from '../../components/ViewsTitle';

const WindowImage = ({ src }) => (
    <HoverImage
        showFilter
        imageClassName='ai-image'
        src={src}
    />
)

const getSide = (index) => index % 2 ? 'left' : 'right'

const ProjectStatusBadge = ({ status, deployedDate, liveUrl }) => {
    const statusConfig = {
        'live': {
            label: 'Live',
            className: 'status-live',
            icon: '●'
        },
        'coming-soon': {
            label: 'Coming Soon',
            className: 'status-coming-soon',
            icon: '◌'
        }
    }
    
    const config = statusConfig[status] || statusConfig['coming-soon']
    const isClickable = status === 'live' && liveUrl && liveUrl !== '#'
    
    const Badge = (
        <div className={`ai-project-status ${config.className} ${isClickable ? 'clickable' : ''}`}>
            <span className='status-icon'>{config.icon}</span>
            <span className='status-label'>{config.label}</span>
            {deployedDate && <span className='status-date'>{deployedDate}</span>}
        </div>
    )

    if (isClickable) {
        return (
            <a 
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className='ai-project-status-link'
            >
                {Badge}
            </a>
        )
    }

    return Badge
}

const SingleProject = (props) => {
    const { image, index } = props
    const side = getSide(index);
    return (
        <div className='ai-projects-single'>
            <div className='row'>
                <div className='col-6 d-none d-lg-block'>
                    <div className=''>
                        <WindowScreen containerClassName={`ai-projects-image-container ai-projects-image-container-${side}`}>
                            <WindowImage src={image} />
                        </WindowScreen>
                    </div>
                </div>
                <div className={`col-12 col-lg-6 d-flex align-items-center ${side === 'right' ? 'order-first' : ''}`}>
                    <ProjectTextSide {...props} />
                </div>
            </div>
        </div>
    )
}

const ProjectTextSide = (props) => {
    const { label, title, description, techs, index, image, status, deployedDate, liveUrl } = props
    const side = getSide(index);
    return (
        <div
            data-aos={`fade-down-${side}`}
            className={`ai-projects-text-side ai-projects-text-side-${side}`}>
            <div
                data-aos={`zoom-in-${side}`}
                className='ai-projects-text-featured'>{label}</div>
            <div
                data-aos={`zoom-in-${side}`}
                className='ai-projects-text-title'>{title}</div>
            
            {status && (
                <div data-aos={`zoom-in-${side}`} className='ai-projects-status-wrapper'>
                    <ProjectStatusBadge status={status} deployedDate={deployedDate} liveUrl={liveUrl} />
                </div>
            )}
            
            <div
                data-aos={`zoom-in-${side}`}
                className='ai-projects-text-description'>
                {description}
                <div className='mt-4 d-block d-lg-none'>
                    <WindowScreen containerClassName={`ai-text-image-container`}>
                        <WindowImage src={image} />
                    </WindowScreen>
                </div>
            </div>
            <div
                data-aos={`zoom-in-${side}`}
                className='ai-projects-text-tecs'>
                {techs.map((tech, i) => `${tech} ${techs.length - 1 !== i ? ' | ' : ''}`)}
            </div>
        </div>
    )
}

const Projects = ({ data: {
    heading,
    list
} }) => {
    return (
        <div className='ai-projects'>
            <div className='container'>
                <div className='ai-projects-container'>
                    <ViewsTitle text={heading} />
                    <div className='row justify-content-center'>
                        {(list || []).map((project, i) => (
                            <SingleProject
                                key={i}
                                index={i}
                                {...project}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

Projects.propTypes = {}

export default Projects
