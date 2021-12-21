import React from "react";
import SmoothScroll from "smooth-scroll";
import "../App.css";

export const scroll = new SmoothScroll('a[className="page-scroll" href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const Guide = () => {
  return (
    <div id="guide" className="container">
      <ul class="main-navigation">
        <li>
          <a className="page-scroll" href="#types">
            Types of Tranformers
          </a>
          <ul>
            <li>
              <a className="page-scroll" href="#instrumentaltf">
                Intrumental Tranformer
              </a>
            </li>
            <li>
              <a className="page-scroll" href="#powertf">
                Power Tranformer
              </a>
            </li>
            <li>
              <a className="page-scroll" href="#disttf">
                Distribution Transformer
              </a>
            </li>
            <li>
              <a className="page-scroll" href="#singletf">
                Single Phase Transformer
              </a>
            </li>
            <li>
              <a className="page-scroll" href="#threetf">
                Three Phase Transformer
              </a>
            </li>
            <li>
              <a className="page-scroll" href="#autotf">
                Auto Transformer
              </a>
            </li>
          </ul>
        </li>
        <li>
          <a className="page-scroll" href="#tfEfficiency">
            Tranformer Efficiency
          </a>
        </li>
        <li>
          <a className="page-scroll" href="#components">
            Components
          </a>
          <ul>
            <li>
              <a className="page-scroll" href="#bucholzrelay">
                Bucholz Relay
              </a>
            </li>
            <li>
              <a className="page-scroll" href="#breather">
                Breather
              </a>
            </li>
            <li>
              <a className="page-scroll" href="#constank">
                Conservator Tank
              </a>
            </li>
            <li>
              <a className="page-scroll" href="#explosionTank">
                Explosion Tank
              </a>
            </li>
            <li>
              <a className="page-scroll" href="#radiator">
                Radiator
              </a>
            </li>
          </ul>
        </li>
        <li>
          <a className="page-scroll" href="#windings">
            Windings
          </a>
          <ul>
            <li>
              <a className="page-scroll" href="#wdgTypes">
                Types
              </a>
              <ul>
                <li>
                  <a className="page-scroll" href="#coreWdg">
                    Core Type Windings
                  </a>
                  <ul>
                    <li>
                      <a className="page-scroll" href="#cylWdg">
                        Cylindrical Winding
                      </a>
                    </li>
                    <li>
                      <a className="page-scroll" href="#HelicalWdg">
                        Helical Winding
                      </a>
                    </li>
                    <li>
                      <a className="page-scroll" href="#DiscHelical">
                        Disc Helical Winding
                      </a>
                    </li>
                    <li>
                      <a className="page-scroll" href="#MultiLayer">
                        Multi-Layer Winding
                      </a>
                    </li>
                    <li>
                      <a className="page-scroll" href="#CrossOver">
                        CrossOver Winding
                      </a>
                    </li>
                    <li>
                      <a className="page-scroll" href="#DiscCont">
                        Disc and Continuous Winding
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a className="page-scroll" href="#shellWdg">
                    Shell Type Windings
                  </a>
                  <ul>
                    <li>
                      <a className="page-scroll" href="#sandwitch">
                        Sandwitch Winding
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <a className="page-scroll" href="#testing">
            Testing
          </a>
          <ul>
            <li>
              <a className="page-scroll" href="#onSite">
                On Site Testing
              </a>
              <ul>
                <li>
                  <a className="page-scroll" href="#typeTest">
                    Type Test
                  </a>
                </li>
                <li>
                  <a className="page-scroll" href="#routineTest">
                    Routine Test
                  </a>
                </li>
                <li>
                  <a className="page-scroll" href="#specialTest">
                    Special Test
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a className="page-scroll" href="#AtFactory">
                At Factory Testing
              </a>
              <ul>
                <li>
                  <a className="page-scroll" href="#preCom">
                    Pre-commissioning tests
                  </a>
                </li>
                <li>
                  <a className="page-scroll" href="#periodic">
                    Periodic/condition monitoring tests
                  </a>
                </li>
                <li>
                  <a className="page-scroll" href="#emergency">
                    Emergency tests
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <a className="page-scroll" href="#cooling">
            Cooling
          </a>
          <ul>
            <li>
              <a className="page-scroll" href="#onam">
                ONAM
              </a>
            </li>
            <li>
              <a className="page-scroll" href="#onaf">
                ONAF
              </a>
            </li>
            <li>
              <a className="page-scroll" href="#ofaf">
                OFAF
              </a>
            </li>
            <li>
              <a className="page-scroll" href="#ofwf">
                OFWF
              </a>
            </li>
            <li>
              <a className="page-scroll" href="#odaf">
                ODAF
              </a>
            </li>
            <li>
              <a className="page-scroll" href="#odwf">
                ODWF
              </a>
            </li>
          </ul>
        </li>
      </ul>
      <div className="container guide-content">
        <div id="tranformers">
          <h2>Tranformers</h2>
          <p>
            Transformer, device that transfers electric energy from one
            alternating-current circuit to one or more other circuits, either
            increasing (stepping up) or reducing (stepping down) the voltage.
            Transformers are employed for widely varying purposes; e.g., to
            reduce the voltage of conventional power circuits to operate
            low-voltage devices, such as doorbells and toy electric trains, and
            to raise the voltage from electric generators so that electric power
            can be transmitted over long distances.
          </p>
          <p>
            Transformers change voltage through electromagnetic induction; i.e.,
            as the magnetic lines of force (flux lines) build up and collapse
            with the changes in current passing through the primary coil,
            current is induced in another coil, called the secondary. The
            secondary voltage is calculated by multiplying the primary voltage
            by the ratio of the number of turns in the secondary coil to the
            number of turns in the primary coil, a quantity called the turns
            ratio.
          </p>
          <p>
            Air-core transformers are designed to transfer radio-frequency
            currents—i.e., the currents used for radio transmission; they
            consist of two or more coils wound around a solid insulating
            substance or on an insulating coil form. Iron-core transformers
            serve analogous functions in the audio-frequency range.
            Impedance-matching transformers are used to match the impedance of a
            source and that of its load, for most efficient transfer of energy.
            Isolation transformers are usually employed for reasons of safety to
            isolate a piece of equipment from the source of power.
          </p>
          <h3>Equivalent Circuit of Tranformer</h3>
          <p>
            The equivalent circuit diagram of a transformer is a simplified
            circuit in which the impedance, resistance and leakage reactance of
            the transformer can be more easily calculated. The equivalent
            impedance of transformer is an important parameter to be calculated.
            This calculation requires the equivalent circuit of transformer
            referred to the primary or equivalent circuit of transformer
            referred to secondary sides respectively. Percentage impedance is
            also a very essential parameter of the transformer. Special
            attention is to be given to this parameter during installing a
            transformer in an existing electrical power system. Percentage
            impedance of different power transformers should be properly matched
            during parallel operation of power transformers. The percentage
            impedance can be derived from the equivalent impedance of the
            transformer so, it can be said that the equivalent circuit of the
            transformer is also required during the calculation of the %
            impedance.
          </p>
          <br></br>
          <img
            src="img/guide/equivalent.gif"
            className="img-responsive"
            alt=""
            align="left"
            height={"100px"}
          />
          <img
            src="img/guide/ckt.gif"
            className="img-responsive"
            alt=""
            align="right"
          />
          <p>
            For drawing equivalent circuit of transformer referred to primary,
            first we have to establish general equivalent circuit of transformer
            then, we will modify it for referring from primary side. For doing
            this, first we need to recall the complete vector diagram of a
            transformer which is shown in the figure below. hu
          </p>
          <p>
            In the figure above, the applied voltage to the primary is V1 and
            voltage across the primary winding is E1. Total current supplied to
            primary is I1. So the voltage V1 applied to the primary is partly
            dropped by I1Z1 or I1R1 + j.I1X1 before it appears across primary
            winding. The voltage appeared across winding is countered by primary
            induced emf E1. So voltage equation of this portion of the
            transformer can be written as, V1 - (I1R1 + jI1X1) = E1
          </p>
          <p>
            From the vector diagram above, it is found that the total primary
            current I1 has two components, one is no – load component Io and the
            other is load component I2′. As this primary current has two
            components or branches, so there must be a parallel path with
            primary winding of transformer. This parallel path of current is
            known as excitation branch of equivalent circuit of transformer.
          </p>
        </div>
        <div id="types">
          <h2>Types of Tranformers</h2>
        </div>
        <div id="instrumentaltf">
          <p>
            <h2>Instrumental Tranformer</h2>
            <p>
              Instrument Transformers are used in AC system for measurement of
              electrical quantities i.e. voltage, current, power, energy, power
              factor, frequency. Instrument transformers are also used with
              protective relays for protection of power system. Basic function
              of Instrument transformers is to step down the AC System voltage
              and current. The voltage and current level of power system is very
              high. It is very difficult and costly to design the measuring
              instruments for measurement of such high level voltage and
              current. Generally measuring instruments are designed for 5 A and
              110 V. The measurement of such very large electrical quantities,
              can be made possible by using the Instrument transformers with
              these small rating measuring instruments. Therefore these
              instrument transformers are very popular in modern power system.
            </p>
            <h3>Advantage of Intrumental Tranformer</h3>
            <p>
              1. The large voltage and current of AC Power system can be
              measured by using small rating measuring instrument i.e. 5 A, 110
              – 120 V. <br></br>2. By using the instrument transformers,
              measuring instruments can be standardized. Which results in
              reduction of cost of measuring instruments. More ever the damaged
              measuring instruments can be replaced easy with healthy
              standardized measuring instruments. <br></br>3. Instrument
              transformers provide electrical isolation between high voltage
              power circuit and measuring instruments. Which reduces
              the electrical insulation requirement for measuring instruments
              and protective circuits and also assures the safety of operators.
              <br></br>4. Several measuring instruments can be connected through
              a single transformer to power system. <br></br>5. Due to low
              voltage and current level in measuring and protective circuit,
              there is low power consumption in measuring and protective
              circuits.
            </p>
            <h3>Types of Intrumental Tranformer</h3>
            <h3>Current Transformer</h3>
            <p>
              Current transformer is used to step down the current of power
              system to a lower level to make it feasible to be measured by
              small rating Ammeter (i.e. 5A ammeter). A typical connection
              diagram of a current transformer is shown in figure below.
            </p>
            <img
              src="img/guide/instrumenttf.gif"
              className="img-responsive"
              alt=""
              align="left"
            />
            <p>
              Primary of C.T. is having very few turns. Sometimes bar primary is
              also used. Primary is connected in series with the power circuit.
              Therefore, sometimes it also called series transformer. The
              secondary is having large no. of turns. Secondary is connected
              directly to an ammeter. As the ammeter is having very small
              resistance. Hence, the secondary of current transformer operates
              almost in short circuited condition. One terminal of secondary is
              earthed to avoid the large voltage on secondary with respect to
              earth. Which in turns reduce the chances of insulation breakdown
              and also protect the operator against high voltage. More ever
              before disconnecting the ammeter, secondary is short circuited
              through a switch ‘S’ as shown in figure above to avoid the high
              voltage build up across the secondary.
            </p>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <h3>Power Transformer</h3>
            <p>
              Potential transformer is used to step down the voltage of power
              system to a lower level to make is feasible to be measured by
              small rating voltmeter i.e. 110 – 120 V voltmeter. A typical
              connection diagram of a potential transformer is showing figure
              below.
            </p>
            <img
              src="img/guide/powerInstf.gif"
              className="img-responsive"
              alt=""
              align="left"
            />
            <p>
              Primary of P.T. is having large no. of turns. Primary is connected
              across the line (generally between on line and earth). Hence,
              sometimes it is also called the parallel transformer. Secondary of
              P.T. is having few turns and connected directly to a voltmeter. As
              the voltmeter is having large resistance. Hence the secondary of a
              P.T. operates almost in open circuited condition. One terminal of
              secondary of P.T. is earthed to maintain the secondary voltage
              with respect to earth. Which assures the safety of operators.
            </p>
          </p>
        </div>
        <div id="singletf">
          <h2>Single Phase Tranformer</h2>
          <p>
            A single phase transformer is a type of transformer which operates
            on single-phase power. A transformer is a passive electrical
            device that transfers electrical energy from one circuit to another
            through the process of electromagnetic induction. It is most
            commonly used to increase (‘step up’) or decrease (‘step
            down’) voltage levels between circuits. A single phase transformer
            consists of a magnetic iron core serving as a magnetic transformer
            part and transformer cooper winding serving as an electrical part. A
            single phase transformer is a high-efficiency piece of electrical
            equipment, and its losses are very low because there isn’t any
            mechanical friction involved in its operation. Transformers are used
            in almost all electrical systems from low voltage up to the highest
            voltage level. It operates only with alternating current (AC)
            because direct current (DC) does not create any electromagnetic
            induction.
          </p>
          <img
            src="img/guide/singletf.png"
            className="img-responsive"
            alt=""
            align="left"
          />
          <p>
            Depending on the electrical network where the transformer is
            installed, there are two transformer types, three-phase transformers
            and single phase transformers. The operation principle of the
            single-phase transformer is: the AC voltage source injects the AC
            current through the transformer primary winding. The AC current
            generates the alternating electromagnetic field. The magnetic field
            lines are moving through iron transformer core and comprise the
            transformer secondary circuit. Thus the voltage is induced in the
            secondary winding with the same frequency as the voltage of the
            primary side. The induced voltage value is determined by Faraday’s
            Law.
          </p>
          <p>
            If the load is connected on the secondary transformer side the
            current will flow through secondary winding. Basically, the single
            phase transformers can operate as step up transformer or step down
            transformers. The main parts of a transformer are windings, core,
            and isolation. The windings should have small resistance value and
            usually they are made of copper (rarely of aluminum). They are wound
            around the core and must be isolated from it. Also, the turns of the
            winding have to be isolated from each other. The transformer core is
            made from very thin steel laminations which have high permeability.
            The laminations have to be thin (between 0.25 mm and 0.5 mm) because
            of decreasing power losses (known as eddy current losses). They have
            to be isolated from each other, and usually, the insulating varnish
            is used for that purpose.
          </p>
          <p>
            The transformer insulation can be provided as dry or as a
            liquid-filled type. The dry-type insulation is provided by synthetic
            resins, air, gas or vacuum. It is used only for small-size
            transformers (below 500 kVA). The liquid insulation type usually
            means using mineral oils. The oil has a long life cycle, good
            isolation characteristics, overload capability, and also provides
            transformer cooling. Oil insulation is always used for big
            transformers. The single phase transformer contains two windings,
            one on primary and the other on the secondary side. They are mostly
            used in the single-phase electrical power system. The three-phase
            system application means using three single-phase units connected in
            the three-phase system. This is a more expensive solution, and it is
            used in the high voltage power system.
          </p>
          <h3>Applications</h3>
          <p>
            The advantages of three single-phase units are transportation,
            maintenance, and spare unit availability. The single-phase
            transformers are widely used in commercial low voltage applications
            as electronic devices. They operate as a step-down voltage
            transformer and decrease the home voltage value to the value
            suitable for electronics supplying. On the secondary side, a
            rectifier is usually connected to convert an AC voltage to the DC
            voltage which is used in electronics applications.
          </p>
        </div>
        <div id="threetf">
          <h2>Three Phase Transformer</h2>
          <h3>What is an Open Delta Connection Transformer?</h3>
          <p>
            An open delta connection transformer uses two single-phase
            transformers to provide a three-phase supply to the load. An open
            delta connection system is also called a V-V system. Open delta
            connection systems are usually only used in emergency conditions, as
            their efficiency is low when compared to delta-delta (closed delta)
            systems (which are used during standard operations).
          </p>
          <p>
            In subsequent discussion, we will explain this system with the help
            of some numerical values. Suppose you have three single-phase
            transformers of 10 kVA each. They are connected in (both primary &
            secondary sides) in a delta connection, then it can be said they are
            connected in a closed delta system. How much 3Ø balanced load can be
            supplied by this combination? The answer is, this combination can
            supply 30 kVA, three-phase balanced load. Load on each transformer
            will be 10 kVA, i.e. each transformer is operating at its rated
            capacity. Now, let one transformer is damaged and disconnected due
            to repairing purpose. Now the remaining system will work as an open
            delta system (i.e. in the open delta, we have two single-phase
            transformers).
          </p>
          <img
            src="img/guide/threetf.png"
            className="img-responsive"
            alt=""
            align="left"
          />
          <p>
            Now, how much 3Ø balanced load can be supplied by this combination?
            Answer is, now we have two single-phase transformers of 10 kVA, but
            we are not able to supply 20 kVA, 3Ø balanced load. This combination
            can supply a maximum of 17.32 kVA three-phase balanced load. Load on
            each transformer will be 10 kVA, i.e. each transformer is operating
            at its rated capacity. The efficiency of this open delta system will
            be less as compared to the closed delta system. This is because both
            transformers are operating at rated capacity (i.e. 10 kVA), so their
            losses will be full load losses, but the output is reduced (output
            is 17.32 kVA instead of 20 KVA). If the output of open delta system
            is possible to be 20 kVA, then the efficiency of closed delta & open
            delta systems will be same, and in the whole world, to supply three
            phase load, instead of three single phase transformers, two single
            phase transformers may be sufficient. So, you are able to continue
            three phase supply as open delta system but at reduced efficiency.
          </p>
          <h3>Advantages</h3>
          <p>
            Open-deltas only require the utility to install two transformers.
            Future Capacity can be increased by simply installing a third
            similar sized transformer verses installing 2-3 larger transformers.
          </p>
        </div>
        <div id="autotf">
          <h2>Auto Transformer</h2>
          <p>
            An autotransformer (or auto transformer) is a type of electrical
            transformer with only one winding. The “auto” prefix refers to the
            single coil acting alone (Greek for “self”) – not to any automatic
            mechanism. An auto transformer is similar to a two winding
            transformer but varies in the way the primary and secondary winding
            of the transformer are interrelated.
          </p>
          <img
            src="img/guide/autotf.gif"
            className="img-responsive"
            alt=""
            align="left"
          />
          <p>
            In an auto transformer, one single winding is used as primary
            winding as well as secondary winding. But in two windings
            transformer two different windings are used for primary and
            secondary purpose. A circuit diagram of auto transformer is shown
            below. The winding AB of total turns N1 is considered as primary
            winding. This winding is tapped from point ′C′ and the portion BC is
            considered as secondary. Let’s assume the number of turns in between
            points ′B′ and ′C′ is N2.
          </p>
          <p>
            As BC portion of the winding is considered as secondary, it can
            easily be understood that value of constant ′k′ is nothing but turns
            ratio or voltage ratio of that auto transformer. When load is
            connected between secondary terminals i.e.between ′B′ and ′C′, load
            current I2 starts flowing. The current in the secondary winding or
            common winding is the difference of I2 and I1.
          </p>
          <h3>Copper Saving</h3>
          <p>
            Now we will discuss the savings of copper in auto transformer
            compared to conventional two winding transformer. We know that
            weight of copper of any winding depends upon its length and
            cross-sectional area. Again length of conductor in winding is
            proportional to its number of turns and cross-sectional area varies
            with rated current. So weight of copper in winding is directly
            proportional to product of number of turns and rated current of the
            winding.
          </p>
          <h3>Advantages</h3>
          <p>
            1. For transformation ratio = 2, the size of the auto
            transformer would be approximately 50% of the corresponding size of
            two winding transformer. For transformation ratio say 20 however the
            size would be 95 %. The saving in cost of the material is of course
            not in the same proportion. The saving of cost is appreciable when
            the ratio of transformer is low, that is lower than 2. Thus auto
            transformer is smaller in size and cheaper. <br></br>2. An auto
            transformer has higher efficiency than two winding transformer. This
            is because of less ohmic loss and core loss due to reduction of
            transformer material. <br></br>3. Auto transformer has
            better voltage regulation as voltage drop in resistance and
            reactance of the single winding is less.
          </p>
          <h3>DisAdvantages</h3>
          <p>
            1. Because of electrical conductivity of the primary and secondary
            windings the lower voltage circuit is liable to be impressed upon by
            higher voltage. To avoid breakdown in the lower voltage circuit, it
            becomes necessary to design the low voltage circuit to withstand
            higher voltage.<br></br> 2. The leakage flux between the primary and
            secondary windings is small and hence the impedance is low. This
            results into severer short circuit currents under fault conditions.
            <br></br>3. The connections on primary and secondary sides have
            necessarily needs to be same, except when using interconnected
            starring connections. This introduces complications due to changing
            primary and secondary phase angle particularly in the case of
            delta/delta connection. <br></br>4. Because of common neutral in a
            star/star connected auto transformer it is not possible to earth
            neutral of one side only. Both their sides should have their
            neutrality either earth or isolated.<br></br> 5. It is more
            difficult to maintain the electromagnetic balance of the winding
            when voltage adjustment tappings are provided. It should be known
            that the provision of tapping on an auto transformer increases
            considerably the frame size of the transformer. If the range of
            tapping is very large, the advantages gained in initial cost is lost
            to a great event.
          </p>
        </div>
        <div id="tfEfficiency">
          <h2>Transformer Efficiency</h2>
          <p>
            Transformers form the most important link between supply systems and
            load. Transformer’s efficiency directly affects its performance and
            aging. The transformer’s efficiency, in general, is in the range of
            95 – 99 %. For large power transformers with very low losses, the
            efficiency can be as high as 99.7%. The input and output
            measurements of a transformer are not done under loaded conditions
            as the wattmeter readings inevitably suffer errors of 1 – 2%. So for
            the purpose of efficiency calculations, OC and SC tests are used to
            calculate rated core and winding losses in the transformer. The core
            losses depend on the transformer rated voltage, and the copper
            losses depend on the currents through the transformer primary and
            secondary windings. Hence transformer efficiency is of prime
            importance to operate it under constant voltage and frequency
            conditions. The rise in the temperature of the transformer due to
            heat generated affects the life of transformer oil properties and
            decides the type of cooling method adopted. The temperature rise
            limits the rating of the equipment.
          </p>
          <p>
            The output power is the product of the fraction of the rated loading
            (volt-ampere), and power factor of the load • The losses are the sum
            of copper losses in the windings + the iron loss + dielectric loss +
            stray load loss. The iron losses include the hysteresis and eddy
            current losses in the transformer.
          </p>
          <p>
            The dielectric losses take place inside the transformer oil. For low
            voltage transformers, it can be neglected. The leakage flux links to
            the metal frame, tank,etc. to produce eddy currents and are present
            all around the transformer hence called stray loss, and it depends
            on the load current and so named as ‘stray load loss.’ It can be
            represented by resistance in series to the leakage reactance.
          </p>
          <h3>Efficiency Calculation of the Transformer</h3>
          <img
            src="img/guide/eff.png"
            className="img-responsive"
            alt=""
            align="left"
          />
          <p>
            The equivalent circuit of transformer referred to primary side is
            shown below. Here Rc accounts for core losses. Using Short
            circuit(SC) test, we can find the equivalent resistance accounting
            for copper losses as Re = R1 + R2' where R2' = a^2R2.
          </p>
          <p>
            Let us define x% be the percentage of full or rated load ‘S’ (VA)
            and let Pcufl(watts) be the full load copper loss and cosθ be the
            power factor of the load. Also, we defined Pi (watts) as core loss.
            As copper and iron losses are major losses in the transformer hence
            only these two types of losses are taken into account while
            calculating efficiency. Then the efficiency of transformer can be
            written as :
          </p>
          <img
            src="img/guide/eff1.png"
            className="img-responsive"
            alt=""
            align="left"
          />
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <p>
            Where, x2Pcufl = copper loss(Pcu) at any loading x% of full load.
            The maximum efficiency (ηmax) occurs when the variable losses equal
            to the constant losses. Since the copper loss is load dependent,
            hence it is a variable loss quantity. And the core loss is taken to
            be the constant quantity. So the condition for maximum efficiency is
            :
          </p>
          <img src="img/guide/eff2.png" className="img-responsive" alt="" />
          <p>
            Now we can write maximum efficiency as :
            <img src="img/guide/eff4.png" className="img-responsive" alt="" />
          </p>
          <p>
            This shows that we can obtain maximum efficiency at full load by
            proper selection of constant and variable losses. However, it is
            difficult to obtain maximum efficiency as copper losses are much
            higher than the fixed core losses. The variation of efficiency with
            loading can be represented by figure below :
          </p>
          <img src="img/guide/eff3.png" className="img-responsive" alt="" />
          <p>
            We can see from the figure that the maximum efficiency occurs at
            unity power factor. And the maximum efficiency occurs at same
            loading irrespective of power factor of the load.
          </p>
          <h3>All Day Efficiency</h3>
          <p>
            It is an energy-based efficiency calculated for distribution
            transformers. Unlike power transformer which is switched in or out
            depending on the load handled by it, a distribution transformer
            loading continuously fluctuates for 24 hours a day. As core losses
            are independent of load, the all-day efficiency depends on the
            copper losses.We define it as the ratio of output energy delivered
            to input energy for a 24 hour cycle. High energy efficiencies are
            achieved by restricting core flux densities to lower values (as the
            core losses are dependent on flux density) by using relatively
            larger cross-section or larger iron/copper weight ratio.
          </p>
        </div>
        <div id="components">
          <h2>Components</h2>
        </div>
      </div>
    </div>
  );
};

export default Guide;
