import React, { Component } from "react";

import "./MainInfo.css";
class MainInfo extends Component {
  render() {
    return (
      <div className={"MainInfo " + this.props.className}>
        <p>
          * Education pricing is available to current and newly accepted college
          students and their parents, as well as faculty, staff, and homeschool
          teachers of all grade levels. For more information, visit{" "}
          <a href="#">apple.com/us-hed/shop.</a>
        </p>
        <p>
          ** Available with 0% APR to qualified customers and requires Apple
          Card Monthly Installments. Apple Card Monthly Installments are
          available for certain Apple products and are subject to credit
          approval and credit limit. See{" "}
          <a href="#">https://support.apple.com/kb/HT211204</a>
          for more information about eligible products. Taxes and shipping not
          included and subject to your standard purchase APR. Variable APRs
          range from 10.99% to 21.99% based on creditworthiness. Rates as of
          April 1, 2020. Additional Apple Card Monthly Installments terms are in
          the Customer Agreement.
        </p>
        <ol>
          <li>
            Testing conducted by Apple in October 2020 using preproduction
            13-inch MacBook Pro systems with Apple M1 chip and 16GB of RAM.
            Performance per watt refers to the ratio of peak CPU performance to
            average power consumed using select industry-standard benchmarks.
            Comparison made against high-performing CPUs for notebooks and
            desktops commercially available at the time of testing. Performance
            tests are conducted using specific computer systems and reflect the
            approximate performance of MacBook Pro.
          </li>
          <li>
            Testing conducted by Apple in October 2020 using preproduction
            13-inch MacBook Pro systems with Apple M1 chip, as well as
            production 1.7GHz quad-core Intel Core i7-based 13-inch MacBook Pro
            systems, all configured with 16GB RAM and 2TB SSD. Open source
            project built with prerelease Xcode 12.2 with Apple Clang 12.0.0,
            Ninja 1.10.0.git, and CMake 3.16.5. Performance tests are conducted
            using specific computer systems and reflect the approximate
            performance of MacBook Pro.
          </li>
          <li>
            Testing conducted by Apple in October 2020 using preproduction
            13-inch MacBook Pro systems with Apple M1 chip and 16GB of RAM
            measuring peak single-thread performance of workloads taken from
            select industry-standard benchmarks, commercial applications, and
            open source applications. Comparison made against the
            highest-performing CPUs for notebooks commercially available at the
            time of testing. Performance tests are conducted using specific
            computer systems and reflect the approximate performance of MacBook
            Pro.
          </li>
          <li>
            Testing conducted by Apple in October 2020 using preproduction
            13-inch MacBook Pro systems with Apple M1 chip, as well as
            production 1.7GHz quad-core Intel Core i7-based 13-inch MacBook Pro
            systems, all configured with 16GB RAM and 2TB SSD. Tested with
            prerelease Final Cut Pro 10.5 using a 55-second clip with 4K Apple
            ProRes RAW media, at 4096x2160 resolution and 59.94 frames per
            second, transcoded to Apple ProRes 422. Performance tests are
            conducted using specific computer systems and reflect the
            approximate performance of MacBook Pro.
          </li>
          <li>
            Testing conducted by Apple in October 2020 using preproduction
            13-inch MacBook Pro systems with Apple M1 chip, as well as
            production 1.7GHz quad-core Intel Core i7-based 13-inch MacBook Pro
            systems, all configured with 16GB RAM and 2TB SSD. Tested with
            prerelease Affinity Photo 1.9.0.199 using the built-in benchmark
            version 1900. Performance tests are conducted using specific
            computer systems and reflect the approximate performance of MacBook
            Pro.
          </li>
          <li>
            Testing conducted by Apple in October 2020 using preproduction
            13-inch MacBook Pro systems with Apple M1 chip, as well as
            production 1.7GHz quad-core Intel Core i7-based 13-inch MacBook Pro
            systems, all configured with 16GB RAM and 2TB SSD. Tested with
            prerelease Logic Pro 10.6.0 with project consisting of multiple
            tracks, each with an Amp Designer plug-in instance applied.
            Individual tracks were added during playback until CPU became
            overloaded. Performance tests are conducted using specific computer
            systems and reflect the approximate performance of MacBook Pro.
          </li>
          <li>
            Testing conducted by Apple in October 2020 using preproduction
            13-inch MacBook Pro systems with Apple M1 chip and 16GB of RAM using
            select industry-standard benchmarks. Comparison made against the
            highest-performing integrated GPUs for notebooks and desktops
            commercially available at the time of testing. Integrated GPU is
            defined as a GPU located on a monolithic silicon die along with a
            CPU and memory controller, behind a unified memory subsystem.
            Performance tests are conducted using specific computer systems and
            reflect the approximate performance of MacBook Pro.
          </li>
          <li>
            Testing conducted by Apple in October 2020 using preproduction
            13-inch MacBook Pro systems with Apple M1 chip, as well as
            production 1.7GHz quad-core Intel Core i7-based 13-inch MacBook Pro
            systems with Intel Iris Plus Graphics 645, all configured with 16GB
            RAM and 2TB SSD. Tested with prerelease Final Cut Pro 10.5 using a
            10-second project with Apple ProRes 422 video at 3840x2160
            resolution and 30 frames per second. Performance tests are conducted
            using specific computer systems and reflect the approximate
            performance of MacBook Pro.
          </li>
          <li>
            Testing conducted by Apple in October 2020 using preproduction
            13-inch MacBook Pro systems with Apple M1 chip, 16GB RAM, and 2TB
            SSD. Tested with prerelease Final Cut Pro 10.5 using a 2-minute
            project with 8K Apple ProRes 422 HQ media, at 8192x4320 resolution
            and 23.98 frames per second. Performance tests are conducted using
            specific computer systems and reflect the approximate performance of
            MacBook Pro.
          </li>
          <li>
            Testing conducted by Apple in October 2020 using preproduction
            13-inch MacBook Pro systems with Apple M1 chip, as well as
            production 1.7GHz quad-core Intel Core i7-based 13-inch MacBook Pro
            systems with Intel Iris Plus Graphics 645, all configured with 16GB
            RAM and 2TB SSD. Tested with Unity 2018.3.6f1 using Book of the Dead
            demo, at 1440x900 resolution. Performance tests are conducted using
            specific computer systems and reflect the approximate performance of
            MacBook Pro.
          </li>
        </ol>
      </div>
    );
  }
}

export default MainInfo;
