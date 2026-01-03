import React from 'react'
import PropTypes from 'prop-types'
import HoverImage from '../../components/HoverImage'
import ViewsTitle from '../../components/ViewsTitle'
import Helm from '../../components/SVGs/Helm'
import { useParallax } from 'react-scroll-parallax'
import { techLogos } from '../../utils/techLogos'

const Paragraph = ({ text }) => (
    <p data-aos="zoom-in-left" className='ai-myself-paragraph'>
        {text}
    </p>
)

const TechLogoItem = ({ logo, name }) => (
    <div className='ai-tech-logo-item'>
        <img src={logo} alt={name} className='ai-tech-logo-img' loading='lazy' />
        <span className='ai-tech-logo-name'>{name}</span>
    </div>
)

const MySelf = ({ data: {
    heading,
    paragraphs,
    techList1,
    techList2,
    image,
} }) => {
    const { ref } = useParallax({
        speed: -20,
        easing: [1, 1.5, 0.5, 2],
        rotate: [0, (360 * 1)],
    });

    return (
        <div className='ai-myself'>
            <div ref={ref} className='ai-myself-settings-icon'>
                <Helm />
            </div>
            <div className='container'>
                <div data-aos="fade-down-left" className='ai-myself-container'>
                    <ViewsTitle text={heading} />
                    
                    <div className='ai-myself-content'>
                        <div className='ai-myself-text-col'>
                            {(paragraphs || []).slice(0, -1).map((text, i) => (
                                <Paragraph key={i} text={text} />
                            ))}
                        </div>
                        
                        <div className='ai-myself-image-col'>
                            <div data-aos="zoom-in-right" className='ai-myself-profile-wrapper'>
                                <HoverImage
                                    showFilter
                                    showBorder
                                    imageClassName='ai-myself-profile'
                                    parentClassName='ai-myself-profile-parent'
                                    src={image}
                                />
                            </div>
                        </div>
                    </div>

                    <div className='ai-myself-tech-section'>
                        <h3 data-aos="zoom-in-left" className='ai-tech-section-title'>
                            {paragraphs && paragraphs[paragraphs.length - 1]}
                        </h3>
                        <div className='ai-tech-logos-grid'>
                            {techLogos.map((item, index) => (
                                <TechLogoItem key={index} {...item} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

MySelf.propTypes = {}

export default MySelf
