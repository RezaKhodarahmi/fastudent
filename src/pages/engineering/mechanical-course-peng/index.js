import React, { useEffect } from 'react'
import feather from 'feather-icons'

import { useRouter } from 'next/router'
import Link from 'next/link'

const Index = () => {

  // Feathericon
  useEffect(() => {
    const timer = setTimeout(() => {
      if (typeof feather !== 'undefined' && feather !== null) {
        feather.replace()
      }
    }, 1000) // 1 second delay

    // Cleanup the timeout on component unmount
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <section className='FNV-SinglePage FNV-SinglePage-Header' >
        <div className='container'>
          <div className='row FNV-Header'>
            <div className='col-12 FNV-Content-White'>
              <h1>Mechanical Course</h1>
              <ul>
                <li><Link href="#P1">MEC 110 System Analysis and Control</Link></li>
                <li><Link href="#P2">MEC 120 Electrical and Electronics Engineering</Link></li>
                <li><Link href="#P3">MEC 130 Finite Element Analysis</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className='FNV-SinglePage pb-5' id='P1'>
        <div className='container'>
          <div className='row'>
            <h3>System Analysis and Control (MEC 110)</h3>

            <div className='col-12'>
              Here are some of the topics that will be covered in this course:
              <ul>
                <li>Open-loop and feedback control</li>
                <li>Laws governing mechanical, electrical, fluid, and thermal control components</li>
                <li>Mathematical models of mechanical, hydraulic, pneumatic, electrical and control devices</li>
                <li>Block diagrams, transfer functions, the response of servomechanisms to typical input signals (step function, impulse, harmonic), frequency response, Bode diagram, stability analysis, and stability criteria</li>
                <li>Block diagrams, transfer functions, the response of servomechanisms to typical input signals (step function, impulse, harmonic), frequency response, Bode diagram, stability analysis, and stability criteria</li>
                <li>Regulation of physical process: proportional, integral, and derivative control</li>
                <li>Theory of linear controller design</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className='FNV-SinglePage FNV-WhiteBG' id='P2'>
        <div className='container'>
          <div className='row'>
            <h3>Electrical and Electronics Engineering (MEC 120)</h3>

            <div className='col-12'>
              Here are some of the topics that will be covered in this course:
              <ul>
                <li>Introduction to analogue and digital semiconductor devices</li>
                <li>Transistor amplifiers and switches</li>
                <li>Power semiconductor devices, rectifiers, dc power supplies and voltage regulation</li>
                <li>Operational amplifiers and application circuits</li>
                <li>Combinational and sequential digital logic circuits</li>
                <li>A practical approach to electronic instrumentation, measurement systems and transducers</li>
                <li>DC circuits, Single phase and polyphase circuits</li>
                <li>Magnetic circuits and transformers (ideal and practical), DC machines: motors and generators</li>
                <li>AC machines: induction motors, synchronous motors, and alternators</li>
                <li>Power factor correction</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className='FNV-SinglePage FNV-GrayBG' id='P3'>
        <div className='container'>
          <div className='row'>
            <h3>Finite Element Analysis (MEC 130)</h3>

            <div className='col-12'>
              Here are some of the topics that will be covered in this course:
              <ul>
                <li>Linear static analysis:</li>
              </ul>

              <div>
                <div>-basic concepts</div>
                <div>-shape functions</div>
                <div>-bar and beam elements</div>
                <div>-direct and energy-based formulations</div>
                <div>-simple coordinate transformations</div>
                <div>-element assembly</div>
                <div>-boundary conditions</div>
                <div>-equation solution</div>
              </div>

              <ul>
                <li>Planar model formulations, work equivalent loads</li>
                <li>Isoparametric element formulation:</li>
              </ul>

              <div>
                <div>-Jacobian matrix</div>
                <div>-numerical integration</div>
                <div>-stress averaging</div>
              </div>

              <ul>
                <li>Modelling, common errors, convergence, and accuracy issues</li>
                <li>Introductory 3D solids, solids of revolution, plates and shells</li>
                <li>Thermal analysis:</li>
              </ul>
              
              <div>
                <div>-matrix formulation</div>
                <div>-steady-state and transient response</div>
              </div>

              <ul>
                <li>ntroductory nonlinear modelling and procedures:</li>
              </ul>

              <div>
                <div>-simple material nonlinearity</div>
                <div>-stress stiffening</div>
                <div>-contact interface</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

Index.guestGuard = true

export default Index
