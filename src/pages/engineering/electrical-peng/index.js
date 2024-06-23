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
              <h1>Electrical Course</h1>
              <h2>Electrical​ P.Eng in Fanavaran:</h2>
              <ul>
                <li><Link href="#P1">ELE 130 Circuits</Link></li>
                <li><Link href="#P2">ELE 140 Systems and Control</Link></li>
                <li><Link href="#P3">ELE 150 Digital Systems and Computers</Link></li>
                <li><Link href="#P4">ELE 160 Electronics</Link></li>
                <li><Link href="#P5">ELE 170 Power Systems and Machines</Link></li>
                <li><Link href="#P6">ELE 210 Information Technology Networks</Link></li>
                <li><Link href="#P7">ELE 220 Digital Communications Systems</Link></li>
                <li><Link href="#P8">ELE 230 Power Systems Engineering</Link></li>
                <li><Link href="#P9">ELE 240 Power Electronics and Drives</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className='FNV-SinglePage pb-5' id='P1'>
        <div className='container'>
          <div className='row'>
            <h3>Circuits (ELE 130)​</h3>

            <div className='col-12'>
              Here are some of the topics that will be covered in this course:
              <ul>
                <li>Electric circuit components: lumped parameter models</li>
                <li>Nodal and mesh analysis of linear, passive circuits; equivalent networks</li>
                <li>Steady-state analysis of lumped parameter, time-invariant circuits: differential equation formulation, sinusoidal inputs, frequency response, impulse response, and transfer functions</li>
                <li>Laplace transform analysis and circuit transient response</li>
                <li>Two-port circuit models and analysis</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className='FNV-SinglePage FNV-WhiteBG' id='P2'>
        <div className='container'>
          <div className='row'>
            <h3>Systems and Control (ELE 140)</h3>

            <div className='col-12'>
              Here are some of the topics that will be covered in this course:
              <ul>
                <li>System models, impulse response functions, and transfer functions</li>
                <li>System input-output and convolution</li>
                <li>Root locus analysis and design</li>
                <li>Feedback and stability: Bode diagrams</li>
                <li>Nyquist criterion, frequency domain design</li>
                <li>State variable representation</li>
                <li>Simple PID control systems</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className='FNV-SinglePage FNV-GrayBG' id='P3'>
        <div className='container'>
          <div className='row'>
            <h3>Digital Systems and Computers (ELE 150)</h3>

            <div className='col-12'>
              Here are some of the topics that will be covered in this course:
              <ul>
                <li>Combinational, sequential, and synchronous logic circuits</li>
                <li>Register level design of digital systems</li>
                <li>Root locus analysis and design</li>
                <li>Assembly language programming, interrupts, and interfacing and communication</li>
                <li>Computer architecture</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className='FNV-SinglePage FNV-WhiteBG' id='P4'>
        <div className='container'>
          <div className='row'>
            <h3>Electronics (ELE 160)</h3>

            <div className='col-12'>
              Here are some of the topics that will be covered in this course:
              <ul>
                <li>Semiconductor devices; diodes and thyristors</li>
                <li>Bipolar and field-effect transistors as linear devices and switches</li>
                <li>Bias circuits, basic amplifiers, small-signal equivalent circuits, transfer functions, and frequency response</li>
                <li>Operational amplifiers and comparators</li>
                <li>Digital integrated circuits and logic families: TTL, TTL-LS, and CMOS</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className='FNV-SinglePage FNV-GrayBG' id='P5'>
        <div className='container'>
          <div className='row'>
            <h3>Power Systems and Machines (ELE 170)</h3>

            <div className='col-12'>
              Here are some of the topics that will be covered in this course:
              <ul>
                <li>Magnetic circuits and transformers.</li>
                <li>Wye and delta connected three-phase systems</li>
                <li>Generation, transmission, and distribution of electric power</li>
                <li>Three-phase transformers</li>
                <li>AC and DC machines</li>
                <li>Three-phase synchronous machines and three-phase induction motors</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className='FNV-SinglePage FNV-WhiteBG' id='P6'>
        <div className='container'>
          <div className='row'>
            <h3>Information Technology Networks (ELE 210)</h3>

            <div className='col-12'>
              Here are some of the topics that will be covered in this course:
              <ul>
                <li>Layered architecture</li>
                <li>circuit-switching networks</li>
                <li>peer-to-peer protocols and data link layer<span>Three-phase transformers</span></li>
                <li>medium access control protocols</li>
                <li>local area networks</li>
                <li>packet-switching networks</li>
                <li>TCP/IP</li>
                <li>ATM networks</li>
                <li>cellular networks</li>
                <li>paging and wireless networks</li>
                <li>telephone networks</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className='FNV-SinglePage FNV-GrayBG' id='P7'>
        <div className='container'>
          <div className='row'>
            <h3>Digital Communications Systems (ELE 220)</h3>

            <div className='col-12'>
              Here are some of the topics that will be covered in this course:
              <ul>
                <li>A/D conversion, source coding; signal sets, line codes, modulation, optimal reception, demodulation, performance in noisy channels, error detecting and correcting codes</li>
                <li>Radio communications; link analysis and performance, terrestrial and satellite communications</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className='FNV-SinglePage FNV-WhiteBG' id='P8'>
        <div className='container'>
          <div className='row'>
            <h3>Power Systems Engineering (ELE 230)</h3>

            <div className='col-12'>
              Here are some of the topics that will be covered in this course:
              <ul>
                <li>Power system representation and analysis</li>
                <li>Components:</li>
              </ul>

              <div>-power transmission lines</div>
              <div>-transformers-synchronous machines</div>

              <ul>
                <li>Distribution:</li>
              </ul>

              <div>-power flow-operations-control</div>

              <ul>
                <li>Fault analysis and power system protection</li>
                <li>System stability</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className='FNV-SinglePage FNV-GrayBG' id='P9'>
        <div className='container'>
          <div className='row'>
            <h3>Power Electronics and Drives (ELE 240)</h3>

            <div className='col-12'>
              Here are some of the topics that will be covered in this course:
              <ul>
                <li>Principles and modelling of electric machines:</li>
              </ul>

              <div>-dc machines</div>
              <div>-induction machines-synchronous machines</div>

              <ul>
                <li>Power electronic devices and converters:</li>
              </ul>

              <div>-choppers-inverters-cycloconverters-switched power supplies</div>

              <ul>
                <li>Electric drives:</li>
              </ul>

              <div>-torque and speed control</div>
              <div>-field and vector oriented control techniques</div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

Index.guestGuard = true

export default Index
