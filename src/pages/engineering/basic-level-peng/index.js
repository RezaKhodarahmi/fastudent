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
              <h2>
                Basic Level P.Eng in Fanavaran
              </h2>
              <ul>
                <li><Link href="#P1">MTH 120 Mathematics</Link></li>
                <li><Link href="#P2">MTH 120 Probability and Statistics</Link></li>
                <li><Link href="#P3">MTH 210 Advanced Mathematics</Link></li>
                <li><Link href="#P4">ELE 110 Electric Circuits and Power</Link></li>
                <li><Link href="#P5">ELE 120 Digital Logic Circuits</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className='FNV-SinglePage pb-5' id='P1'>
        <div className='container'>
          <div className='row'>
            <h3>Mathematics (MTH 120)</h3>

            <div className='col-12'>
              Here are some of the topics that will be covered in this course:
              <ul>
                <li>Calculus, Vector, and Linear Algebra: Applications involving matrix algebra, determinants, eigenvalues</li>
                <li>first and second-order linear ordinary differential equations, Laplace transforms</li>
                <li>Vector algebra</li>
                <li>vector functions and operations</li>
                <li>orthogonal curvilinear coordinates</li>
                <li>applications of partial derivatives, Lagrange multipliers, multiple integrals, line and surface integrals</li>
                <li>integral theorems (Gauss, Green, Stokes)</li>
                <li>Power series</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className='FNV-SinglePage FNV-WhiteBG' id='P2'>
        <div className='container'>
          <div className='row'>
            <h3>Probability and Statistics (MTH 120)</h3>

            <div className='col-12'>
              Here are some of the topics that will be covered in this course:
              <ul>
                <li>Concepts of probability</li>
                <li>events and populations</li>
                <li>probability theorems</li>
                <li>concept of a random variable</li>
                <li>continuous and discrete random variables</li>
                <li>probability distributions</li>
                <li>distributions of functions of a random variable</li>
                <li>sampling and statistical estimation theory</li>
                <li>hypothesis testing, simple regression analysis</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className='FNV-SinglePage FNV-GrayBG' id='P3'>
        <div className='container'>
          <div className='row'>
            <h3>Advanced Mathematics (MTH 210)</h3>

            <div className='col-12'>
              Here are some of the topics that will be covered in this course:
              <ul>
                <li>Series Solutions of Differential Equations: Series solutions of ordinary differential equations, boundary value problems and orthogonal functions, Fourier series</li>
                <li>Numerical Methods: Use of computers for the numerical solution of engineering problems, including techniques involving library subroutines and spreadsheets</li>
                <li>Approximations and errors, interpolation, systems of linear and non-linear algebraic equations, curve fitting, numerical integration and differentiation, and ordinary differential equations</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className='FNV-SinglePage FNV-WhiteBG' id='P4'>
        <div className='container'>
          <div className='row'>
            <h3>Electric Circuits and Power (ELE 110)</h3>

            <div className='col-12'>
              Here are some of the topics that will be covered in this course:
              <ul>
                <li>Basic laws, current, voltage, power</li>
                <li>DC circuits, network theorems, network analysis</li>
                <li>Simple transients, AC circuits</li>
                <li>Impedance concept, resonance</li>
                <li>Use and application of phasors and complex algebra in steady-state response</li>
                <li>Simple magnetic circuits</li>
                <li>Basic concepts and performance characteristics of transformers</li>
                <li>An introduction to diodes and transistors</li>
                <li>Rectification and filtering</li>
                <li>Simple logic circuits</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className='FNV-SinglePage FNV-GrayBG' id='P5'>
        <div className='container'>
          <div className='row'>
            <h3>Digital Logic Circuits (ELE 120)</h3>

            <div className='col-12'>
              Here are some of the topics that will be covered in this course:
              <ul>
                <li><a href="https://www.encyclopedia.com/science-and-technology/mathematics/mathematics/boolean-algebra">Boolean algebra</a>, encoders, decoders, shift registers, and asynchronous and synchronous counters together with timing considerations</li>
                <li>Design of asynchronous circuits, synchronous sequential circuits, and finite state machines</li>
                <li>Karnaugh mapping techniques, and state tables and diagrams</li>
                <li>Introduction to programmable logic</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

Index.guestGuard = true

export default Index
