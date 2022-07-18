import React from 'react'
import InfoIcon from '@material-ui/icons/Info'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord'
import './styles.css'

export const Widgets = () => {

    const Articulos = (title, subtitle) => {
        return (
            <div className="widgets__article">
                <div className='widgets__left'>
                    <FiberManualRecordIcon/>
                </div>
                <div className='widgets__right'>
                    <h4>{title}</h4>
                    <p>{subtitle}</p>
                </div>
            </div>
        )
    }

  return (
    <div className='widgets'>
        <div className='widgets__header'>
            <h2>Lo más visto hoy en Linkedin</h2>
            <InfoIcon/>
        </div>
        {Articulos("React", "Clon de Linkedin")}
        {Articulos("React", "Middleware Sagas")}
        {Articulos("React", "Styled components")}
    </div>
  )
}
