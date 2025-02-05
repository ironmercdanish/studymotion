import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const TcsNqtPrep = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container">
      <h2
        className="my-5 pt-5"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <b>
          <strong>TCS NQT Coding Sheet – TCS Coding Questions</strong>
        </b>
      </h2>
      <br />
      <div
        className="container my-3 text-start"
        style={{ color: props.mode === "dark" ? "#ffc007" : "#cf2d2d" }}
      >
        <h2>About TCS NQT :- </h2>
      </div>
      <div className="container text-start">
        <p
          className={`h5 ${
            props.mode === "dark" ? "text-light" : "text-muted"
          }`}
        >
          <br />
          TCS NQT is National Qualifier Test conducted by TCS(Tata Consultancy
          Services) to hire for the role of TCS Ninja and TCS Digital. <br />{" "}
          All the interested students can find the detailed TCS NQT Syllabus and
          Exam pattern in this article. Nearly 1 million (10 Lakh+) <br />
          candidates appears in the TCS NQT test every year. It is a
          prerequisite for all the tests. The validity of the NQT score is of
          two years. Candidates are eligible to apply on the TCS iON Job Listing
          Portal with an NQT score. NQT exams are conducted in both online and{" "}
          <br /> offline modes. This sheet will help you prepare for the TCS NQT
          exam & you can apply for all the top-notch companies that <br />
          recognize the exam score. Here we have collected all the interview
          questions and answers to land a job at TCS.
        </p>
      </div>
      <br />
      <div className="container">
        <h5>
          <Link
            className="link"
            to="https://takeuforward.org/interviews/tcs-nqt-syllabus-and-exam-pattern-updated-dec-2021/"
            target="_blank"
            style={{ color: props.mode === "dark" ? "#ffc007" : "#669cd9" }}
          >
            Check Detailed TCS NQT Syllabus Here &raquo;
          </Link>
        </h5>
      </div>
      <br />
      <div
        className={`container mt-5 ${
          props.mode === "dark" ? "text-light" : "text-muted"
        }`}
      >
        <h2>List of Questions/Problems Asked in TCS NQT</h2>
      </div>
      <br />
      <div className="container my-3 text-start">
        <h2 style={{ color: props.mode === "dark" ? "white" : "black" }}>
          Problems on Arrays
        </h2>
        <br />
        <ul className="list-group">
          <li
            className="list-group-item"
            style={{
              borderRadius: "15px",
              backgroundColor: props.mode === "dark" ? "#42424F" : "white",
            }}
          >
            <Link
              className="link"
              to="https://takeuforward.org/data-structure/find-the-smallest-element-in-an-array/"
              target="_blank"
              rel="noreferrer"
              style={{ color: props.mode === "dark" ? "#ffc007" : "#669cd9" }}
            >
              Find the smallest number in an array
            </Link>
          </li>
          <li
            className="list-group-item"
            style={{
              borderRadius: "15px",
              backgroundColor: props.mode === "dark" ? "#42424F" : "white",
            }}
          >
            <Link
              className="link"
              to="https://takeuforward.org/data-structure/find-the-largest-element-in-an-array/"
              target="_blank"
              rel="noreferrer"
              style={{ color: props.mode === "dark" ? "#ffc007" : "#669cd9" }}
            >
              Find the largest number in an array
            </Link>
          </li>
          <li
            className="list-group-item"
            style={{
              borderRadius: "15px",
              backgroundColor: props.mode === "dark" ? "#42424F" : "white",
            }}
          >
            <Link
              className="link"
              to="https://takeuforward.org/data-structure/find-second-smallest-and-second-largest-element-in-an-array/"
              target="_blank"
              rel="noreferrer"
              style={{ color: props.mode === "dark" ? "#ffc007" : "#669cd9" }}
            >
              Second Smallest and Second Largest element in an array
            </Link>
          </li>
          <li
            className="list-group-item"
            style={{
              borderRadius: "15px",
              backgroundColor: props.mode === "dark" ? "#42424F" : "white",
            }}
          >
            <Link
              className="link"
              to="https://takeuforward.org/data-structure/reverse-a-given-array/"
              target="_blank"
              rel="noreferrer"
              style={{ color: props.mode === "dark" ? "#ffc007" : "#669cd9" }}
            >
              Reverse a given array
            </Link>
          </li>
          <li
            className="list-group-item"
            style={{
              borderRadius: "15px",
              backgroundColor: props.mode === "dark" ? "#42424F" : "white",
            }}
          >
            <Link
              className="link"
              to="https://takeuforward.org/data-structure/count-frequency-of-each-element-in-the-array/"
              target="_blank"
              rel="noreferrer"
              style={{ color: props.mode === "dark" ? "#ffc007" : "#669cd9" }}
            >
              Count frequency of each element in an array
            </Link>
          </li>
          <li
            className="list-group-item"
            style={{
              borderRadius: "15px",
              backgroundColor: props.mode === "dark" ? "#42424F" : "white",
            }}
          >
            <Link
              className="link"
              to="https://takeuforward.org/data-structure/rearrange-array-in-increasing-decreasing-order/"
              target="_blank"
              rel="noreferrer"
              style={{ color: props.mode === "dark" ? "#ffc007" : "#669cd9" }}
            >
              Rearrange array in increasing-decreasing order
            </Link>
          </li>
          <li
            className="list-group-item"
            style={{
              borderRadius: "15px",
              backgroundColor: props.mode === "dark" ? "#42424F" : "white",
            }}
          >
            <Link
              className="link"
              to="https://takeuforward.org/arrays/calculate-sum-of-the-elements-of-the-array/"
              target="_blank"
              rel="noreferrer"
              style={{ color: props.mode === "dark" ? "#ffc007" : "#669cd9" }}
            >
              Calculate sum of the elements of the array
            </Link>
          </li>
          <li
            className="list-group-item"
            style={{
              borderRadius: "15px",
              backgroundColor: props.mode === "dark" ? "#42424F" : "white",
            }}
          >
            <Link
              className="link"
              to="https://takeuforward.org/data-structure/rotate-array-by-k-elements-block-swap-algorithm/"
              target="_blank"
              rel="noreferrer"
              style={{ color: props.mode === "dark" ? "#ffc007" : "#669cd9" }}
            >
              Rotate array by K elements – Block Swap Algorithm
            </Link>
          </li>
          <li
            className="list-group-item"
            style={{
              borderRadius: "15px",
              backgroundColor: props.mode === "dark" ? "#42424F" : "white",
            }}
          >
            <Link
              className="link"
              to="https://takeuforward.org/data-structure/average-of-all-the-elements-in-the-array/"
              target="_blank"
              rel="noreferrer"
              style={{ color: props.mode === "dark" ? "#ffc007" : "#669cd9" }}
            >
              Average of all elements in an array
            </Link>
          </li>
          <li
            className="list-group-item"
            style={{
              borderRadius: "15px",
              backgroundColor: props.mode === "dark" ? "#42424F" : "white",
            }}
          >
            <Link
              className="link"
              to="https://takeuforward.org/data-structure/find-median-of-the-given-array/"
              target="_blank"
              rel="noreferrer"
              style={{ color: props.mode === "dark" ? "#ffc007" : "#669cd9" }}
            >
              Find the median of the given array
            </Link>
          </li>
          <li
            className="list-group-item"
            style={{
              borderRadius: "15px",
              backgroundColor: props.mode === "dark" ? "#42424F" : "white",
            }}
          >
            <Link
              className="link"
              to="https://takeuforward.org/data-structure/remove-duplicates-in-place-from-sorted-array/"
              target="_blank"
              rel="noreferrer"
              style={{ color: props.mode === "dark" ? "#ffc007" : "#669cd9" }}
            >
              Remove duplicates from a sorted array
            </Link>
          </li>
          <li
            className="list-group-item"
            style={{
              borderRadius: "15px",
              backgroundColor: props.mode === "dark" ? "#42424F" : "white",
            }}
          >
            <Link
              className="link"
              to="https://takeuforward.org/data-structure/remove-duplicates-from-an-unsorted-array/"
              target="_blank"
              rel="noreferrer"
              style={{ color: props.mode === "dark" ? "#ffc007" : "#669cd9" }}
            >
              Remove duplicates from unsorted array
            </Link>
          </li>
          <li
            className="list-group-item"
            style={{
              borderRadius: "15px",
              backgroundColor: props.mode === "dark" ? "#42424F" : "white",
            }}
          >
            <Link
              className="link"
              to="https://takeuforward.org/data-structure/adding-element-in-an-array/"
              target="_blank"
              rel="noreferrer"
              style={{ color: props.mode === "dark" ? "#ffc007" : "#669cd9" }}
            >
              Adding Element in an array
            </Link>
          </li>
          <li
            className="list-group-item"
            style={{
              borderRadius: "15px",
              backgroundColor: props.mode === "dark" ? "#42424F" : "white",
            }}
          >
            <Link
              className="link"
              to="https://takeuforward.org/data-structure/find-all-repeating-elements-in-an-array/"
              target="_blank"
              rel="noreferrer"
              style={{ color: props.mode === "dark" ? "#ffc007" : "#669cd9" }}
            >
              Find all repeating elements in an array
            </Link>
          </li>
          <li
            className="list-group-item"
            style={{
              borderRadius: "15px",
              backgroundColor: props.mode === "dark" ? "#42424F" : "white",
            }}
          >
            <Link
              className="link"
              to="https://takeuforward.org/data-structure/find-all-the-non-repeating-elements-in-an-array/"
              target="_blank"
              rel="noreferrer"
              style={{ color: props.mode === "dark" ? "#ffc007" : "#669cd9" }}
            >
              Find all non-repeating elements in an array
            </Link>
          </li>
          <li
            className="list-group-item"
            style={{
              borderRadius: "15px",
              backgroundColor: props.mode === "dark" ? "#42424F" : "white",
            }}
          >
            <Link
              className="link"
              to="https://takeuforward.org/data-structure/find-all-symmetric-pairs-in-the-array-of-pairs/"
              target="_blank"
              rel="noreferrer"
              style={{ color: props.mode === "dark" ? "#ffc007" : "#669cd9" }}
            >
              Find all symmetric pairs in array
            </Link>
          </li>
          <li
            className="list-group-item"
            style={{
              borderRadius: "15px",
              backgroundColor: props.mode === "dark" ? "#42424F" : "white",
            }}
          >
            <Link
              className="link"
              to="https://takeuforward.org/data-structure/maximum-product-subarray-in-an-array/"
              target="_blank"
              rel="noreferrer"
              style={{ color: props.mode === "dark" ? "#ffc007" : "#669cd9" }}
            >
              Maximum product subarray in an array
            </Link>
          </li>
          <li
            className="list-group-item"
            style={{
              borderRadius: "15px",
              backgroundColor: props.mode === "dark" ? "#42424F" : "white",
            }}
          >
            <Link
              className="link"
              to="https://takeuforward.org/data-structure/replace-elements-by-its-rank-in-the-array/"
              target="_blank"
              rel="noreferrer"
              style={{ color: props.mode === "dark" ? "#ffc007" : "#669cd9" }}
            >
              Replace each element of the array by its rank in the array
            </Link>
          </li>
          <li
            className="list-group-item"
            style={{
              borderRadius: "15px",
              backgroundColor: props.mode === "dark" ? "#42424F" : "white",
            }}
          >
            <Link
              className="link"
              to="https://takeuforward.org/data-structure/sort-elements-of-an-array-by-frequency/"
              target="_blank"
              rel="noreferrer"
              style={{ color: props.mode === "dark" ? "#ffc007" : "#669cd9" }}
            >
              Sorting elements of an array by frequency
            </Link>
          </li>
          <li
            className="list-group-item"
            style={{
              borderRadius: "15px",
              backgroundColor: props.mode === "dark" ? "#42424F" : "white",
            }}
          >
            <Link
              className="link"
              to="https://takeuforward.org/data-structure/rotate-array-by-k-elements/"
              target="_blank"
              rel="noreferrer"
              style={{ color: props.mode === "dark" ? "#ffc007" : "#669cd9" }}
            >
              Rotation of elements of array- left and right
            </Link>
          </li>
          <li
            className="list-group-item"
            style={{
              borderRadius: "15px",
              backgroundColor: props.mode === "dark" ? "#42424F" : "white",
            }}
          >
            <Link
              className="link"
              to="https://takeuforward.org/data-structure/finding-equilibrium-index-in-an-array/"
              target="_blank"
              rel="noreferrer"
              style={{ color: props.mode === "dark" ? "#ffc007" : "#669cd9" }}
            >
              Finding equilibrium index of an array
            </Link>
          </li>
          <li
            className="list-group-item"
            style={{
              borderRadius: "15px",
              backgroundColor: props.mode === "dark" ? "#42424F" : "white",
            }}
          >
            <Link
              className="link"
              to="/"
              target="_blank"
              rel="noreferrer"
              style={{ color: props.mode === "dark" ? "#ffc007" : "#669cd9" }}
            >
              Finding Circular rotation of an array by K positions
            </Link>
          </li>
          <li
            className="list-group-item"
            style={{
              borderRadius: "15px",
              backgroundColor: props.mode === "dark" ? "#42424F" : "white",
            }}
          >
            <Link
              className="link"
              to="/"
              target="_blank"
              rel="noreferrer"
              style={{ color: props.mode === "dark" ? "#ffc007" : "#669cd9" }}
            >
              Sort an array according to the order defined by another array
            </Link>
          </li>
          <li
            className="list-group-item"
            style={{
              borderRadius: "15px",
              backgroundColor: props.mode === "dark" ? "#42424F" : "white",
            }}
          >
            <Link
              className="link"
              to="https://takeuforward.org/data-structure/search-an-element-in-an-array-program-cpp-java/"
              target="_blank"
              rel="noreferrer"
              style={{ color: props.mode === "dark" ? "#ffc007" : "#669cd9" }}
            >
              Search an element in an array
            </Link>
          </li>
          <li
            className="list-group-item"
            style={{
              borderRadius: "15px",
              backgroundColor: props.mode === "dark" ? "#42424F" : "white",
            }}
          >
            <Link
              className="link"
              to="https://takeuforward.org/data-structure/check-if-array-is-subset-of-another-array/"
              target="_blank"
              rel="noreferrer"
              style={{ color: props.mode === "dark" ? "#ffc007" : "#669cd9" }}
            >
              Check if Array is a subset of another array or not
            </Link>
          </li>
        </ul>
      </div>
      <br />
      <div className="container my-3 text-start">
        <h2 style={{ color: props.mode === "dark" ? "white" : "black" }}>
          Problems on Numbers
        </h2>
        <br />
        <ul className="list-group">
          <li
            className="list-group-item"
            style={{
              borderRadius: "15px",
              backgroundColor: props.mode === "dark" ? "#42424F" : "white",
            }}
          >
            <Link
              className="link"
              to="https://takeuforward.org/data-structure/check-if-a-number-is-palindrome-or-not/"
              target="_blank"
              rel="noreferrer"
              style={{ color: props.mode === "dark" ? "#ffc007" : "#669cd9" }}
            >
              Check if a number is palindrome or not
            </Link>
          </li>
          <li
            className="list-group-item"
            style={{
              borderRadius: "15px",
              backgroundColor: props.mode === "dark" ? "#42424F" : "white",
            }}
          >
            <Link
              className="link"
              to="https://takeuforward.org/data-structure/find-all-palindrome-numbers-in-a-given-range/"
              target="_blank"
              rel="noreferrer"
              style={{ color: props.mode === "dark" ? "#ffc007" : "#669cd9" }}
            >
              Find all Palindrome numbers in a given range
            </Link>
          </li>
          <li
            className="list-group-item"
            style={{
              borderRadius: "15px",
              backgroundColor: props.mode === "dark" ? "#42424F" : "white",
            }}
          >
            <Link
              className="link"
              to="https://takeuforward.org/data-structure/check-if-a-number-is-prime-or-not/"
              target="_blank"
              rel="noreferrer"
              style={{ color: props.mode === "dark" ? "#ffc007" : "#669cd9" }}
            >
              Check if a number is prime or not
            </Link>
          </li>
          <li
            className="list-group-item"
            style={{
              borderRadius: "15px",
              backgroundColor: props.mode === "dark" ? "#42424F" : "white",
            }}
          >
            <Link
              className="link"
              to="https://takeuforward.org/data-structure/prime-numbers-in-a-given-range/"
              target="_blank"
              rel="noreferrer"
              style={{ color: props.mode === "dark" ? "#ffc007" : "#669cd9" }}
            >
              Prime numbers in a given range
            </Link>
          </li>
          <li
            className="list-group-item"
            style={{
              borderRadius: "15px",
              backgroundColor: props.mode === "dark" ? "#42424F" : "white",
            }}
          >
            <Link
              className="link"
              to="https://takeuforward.org/maths/check-if-a-number-is-armstrong-number-or-not/"
              target="_blank"
              rel="noreferrer"
              style={{ color: props.mode === "dark" ? "#ffc007" : "#669cd9" }}
            >
              Check if a number is armstrong number of not
            </Link>
          </li>
          <li
            className="list-group-item"
            style={{
              borderRadius: "15px",
              backgroundColor: props.mode === "dark" ? "#42424F" : "white",
            }}
          >
            <Link
              className="link"
              to="https://takeuforward.org/data-structure/check-whether-a-number-is-perfect-number-or-not/"
              target="_blank"
              rel="noreferrer"
              style={{ color: props.mode === "dark" ? "#ffc007" : "#669cd9" }}
            >
              Check if a number is perfect number
            </Link>
          </li>
          <li
            className="list-group-item"
            style={{
              borderRadius: "15px",
              backgroundColor: props.mode === "dark" ? "#42424F" : "white",
            }}
          >
            <Link
              className="link"
              to="https://takeuforward.org/arrays/check-whether-a-given-number-is-even-or-odd/"
              target="_blank"
              rel="noreferrer"
              style={{ color: props.mode === "dark" ? "#ffc007" : "#669cd9" }}
            >
              Even or Odd
            </Link>
          </li>
          <li
            className="list-group-item"
            style={{
              borderRadius: "15px",
              backgroundColor: props.mode === "dark" ? "#42424F" : "white",
            }}
          >
            <Link
              className="link"
              to="https://takeuforward.org/data-structure/check-whether-a-number-is-positive-or-negative/"
              target="_blank"
              rel="noreferrer"
              style={{ color: props.mode === "dark" ? "#ffc007" : "#669cd9" }}
            >
              Check weather a given number is positive or negative
            </Link>
          </li>
          <li
            className="list-group-item"
            style={{
              borderRadius: "15px",
              backgroundColor: props.mode === "dark" ? "#42424F" : "white",
            }}
          >
            <Link
              className="link"
              to="https://takeuforward.org/data-structure/sum-of-first-n-natural-numbers/"
              target="_blank"
              rel="noreferrer"
              style={{ color: props.mode === "dark" ? "#ffc007" : "#669cd9" }}
            >
              Sum of first N natural numbers
            </Link>
          </li>
          <li
            className="list-group-item"
            style={{
              borderRadius: "15px",
              backgroundColor: props.mode === "dark" ? "#42424F" : "white",
            }}
          >
            <Link
              className="link"
              to="https://takeuforward.org/data-structure/find-sum-of-ap-series/"
              target="_blank"
              rel="noreferrer"
              style={{ color: props.mode === "dark" ? "#ffc007" : "#669cd9" }}
            >
              Find Sum of AP Series
            </Link>
          </li>
          <li
            className="list-group-item"
            style={{
              borderRadius: "15px",
              backgroundColor: props.mode === "dark" ? "#42424F" : "white",
            }}
          >
            <Link
              className="link"
              to="https://takeuforward.org/data-structure/program-to-find-sum-of-gp-series/"
              target="_blank"
              rel="noreferrer"
              style={{ color: props.mode === "dark" ? "#ffc007" : "#669cd9" }}
            >
              Program to find sum of GP Series
            </Link>
          </li>
          <li
            className="list-group-item"
            style={{
              borderRadius: "15px",
              backgroundColor: props.mode === "dark" ? "#42424F" : "white",
            }}
          >
            <Link
              className="link"
              to="https://takeuforward.org/maths/greatest-of-two-numbers/"
              target="_blank"
              rel="noreferrer"
              style={{ color: props.mode === "dark" ? "#ffc007" : "#669cd9" }}
            >
              Greatest of two numbers
            </Link>
          </li>
          <li
            className="list-group-item"
            style={{
              borderRadius: "15px",
              backgroundColor: props.mode === "dark" ? "#42424F" : "white",
            }}
          >
            <Link
              className="link"
              to="https://takeuforward.org/arrays/greatest-of-three-numbers/"
              target="_blank"
              rel="noreferrer"
              style={{ color: props.mode === "dark" ? "#ffc007" : "#669cd9" }}
            >
              Greatest of three numbers
            </Link>
          </li>
          <li
            className="list-group-item"
            style={{
              borderRadius: "15px",
              backgroundColor: props.mode === "dark" ? "#42424F" : "white",
            }}
          >
            <Link
              className="link"
              to="https://takeuforward.org/data-structure/check-if-given-year-is-a-leap-year-or-not/"
              target="_blank"
              rel="noreferrer"
              style={{ color: props.mode === "dark" ? "#ffc007" : "#669cd9" }}
            >
              Leap Year or not
            </Link>
          </li>
          <li
            className="list-group-item"
            style={{
              borderRadius: "15px",
              backgroundColor: props.mode === "dark" ? "#42424F" : "white",
            }}
          >
            <Link
              className="link"
              to="https://takeuforward.org/data-structure/reverse-digits-of-a-number/"
              target="_blank"
              rel="noreferrer"
              style={{ color: props.mode === "dark" ? "#ffc007" : "#669cd9" }}
            >
              Reverse digits of a number
            </Link>
          </li>
          <li
            className="list-group-item"
            style={{
              borderRadius: "15px",
              backgroundColor: props.mode === "dark" ? "#42424F" : "white",
            }}
          >
            <Link
              className="link"
              to="https://takeuforward.org/data-structure/maximum-and-minimum-digit-in-a-number/"
              target="_blank"
              rel="noreferrer"
              style={{ color: props.mode === "dark" ? "#ffc007" : "#669cd9" }}
            >
              Maximum and Minimum digit in a number
            </Link>
          </li>
          <li
            className="list-group-item"
            style={{
              borderRadius: "15px",
              backgroundColor: props.mode === "dark" ? "#42424F" : "white",
            }}
          >
            <Link
              className="link"
              to="https://takeuforward.org/arrays/print-fibonacci-series-up-to-nth-term/"
              target="_blank"
              rel="noreferrer"
              style={{ color: props.mode === "dark" ? "#ffc007" : "#669cd9" }}
            >
              Print Fibonacci upto Nth Term
            </Link>
          </li>
          <li
            className="list-group-item"
            style={{
              borderRadius: "15px",
              backgroundColor: props.mode === "dark" ? "#42424F" : "white",
            }}
          >
            <Link
              className="link"
              to="https://takeuforward.org/data-structure/factorial-of-a-number-iterative-and-recursive/"
              target="_blank"
              rel="noreferrer"
              style={{ color: props.mode === "dark" ? "#ffc007" : "#669cd9" }}
            >
              Factorial of a number
            </Link>
          </li>
          <li
            className="list-group-item"
            style={{
              borderRadius: "15px",
              backgroundColor: props.mode === "dark" ? "#42424F" : "white",
            }}
          >
            <Link
              className="link"
              to="https://takeuforward.org/data-structure/calculate-the-power-of-a-number-binary-exponentiation/"
              target="_blank"
              rel="noreferrer"
              style={{ color: props.mode === "dark" ? "#ffc007" : "#669cd9" }}
            >
              Power of a number
            </Link>
          </li>
          <li
            className="list-group-item"
            style={{
              borderRadius: "15px",
              backgroundColor: props.mode === "dark" ? "#42424F" : "white",
            }}
          >
            <Link
              className="link"
              to="https://takeuforward.org/combinatorics/factors-of-a-given-number/"
              target="_blank"
              rel="noreferrer"
              style={{ color: props.mode === "dark" ? "#ffc007" : "#669cd9" }}
            >
              Factors of a given number
            </Link>
          </li>
          <li
            className="list-group-item"
            style={{
              borderRadius: "15px",
              backgroundColor: props.mode === "dark" ? "#42424F" : "white",
            }}
          >
            <Link
              className="link"
              to="https://takeuforward.org/data-structure/print-all-prime-factors-of-the-given-number/"
              target="_blank"
              rel="noreferrer"
              style={{ color: props.mode === "dark" ? "#ffc007" : "#669cd9" }}
            >
              Print all prime factors of the given number
            </Link>
          </li>
          <li
            className="list-group-item"
            style={{
              borderRadius: "15px",
              backgroundColor: props.mode === "dark" ? "#42424F" : "white",
            }}
          >
            <Link
              className="link"
              to="https://takeuforward.org/data-structure/check-if-a-number-is-a-strong-number-or-not/"
              target="_blank"
              rel="noreferrer"
              style={{ color: props.mode === "dark" ? "#ffc007" : "#669cd9" }}
            >
              Check if a number is a strong number or not
            </Link>
          </li>
          <li
            className="list-group-item"
            style={{
              borderRadius: "15px",
              backgroundColor: props.mode === "dark" ? "#42424F" : "white",
            }}
          >
            <Link
              className="link"
              to="https://takeuforward.org/data-structure/check-if-a-number-is-automorphic-number/"
              target="_blank"
              rel="noreferrer"
              style={{ color: props.mode === "dark" ? "#ffc007" : "#669cd9" }}
            >
              Check if a Number is Automorphic
            </Link>
          </li>
          <li
            className="list-group-item"
            style={{
              borderRadius: "15px",
              backgroundColor: props.mode === "dark" ? "#42424F" : "white",
            }}
          >
            <Link
              className="link"
              to="https://takeuforward.org/data-structure/find-gcd-of-two-numbers/"
              target="_blank"
              rel="noreferrer"
              style={{ color: props.mode === "dark" ? "#ffc007" : "#669cd9" }}
            >
              GCD of two numbers
            </Link>
          </li>
          <li
            className="list-group-item"
            style={{
              borderRadius: "15px",
              backgroundColor: props.mode === "dark" ? "#42424F" : "white",
            }}
          >
            <Link
              className="link"
              to="https://takeuforward.org/data-structure/find-lcm-of-two-numbers/"
              target="_blank"
              rel="noreferrer"
              style={{ color: props.mode === "dark" ? "#ffc007" : "#669cd9" }}
            >
              LCM of two numbers
            </Link>
          </li>
          <li
            className="list-group-item"
            style={{
              borderRadius: "15px",
              backgroundColor: props.mode === "dark" ? "#42424F" : "white",
            }}
          >
            <Link
              className="link"
              to="https://takeuforward.org/data-structure/check-if-the-given-number-is-harshador-niven-number/"
              target="_blank"
              rel="noreferrer"
              style={{ color: props.mode === "dark" ? "#ffc007" : "#669cd9" }}
            >
              Check if a number is Harshad number
            </Link>
          </li>
          <li
            className="list-group-item"
            style={{
              borderRadius: "15px",
              backgroundColor: props.mode === "dark" ? "#42424F" : "white",
            }}
          >
            <Link
              className="link"
              to="https://takeuforward.org/data-structure/check-if-the-number-is-an-abundant-number-or-not/"
              target="_blank"
              rel="noreferrer"
              style={{ color: props.mode === "dark" ? "#ffc007" : "#669cd9" }}
            >
              Check if the number is abundant number or not
            </Link>
          </li>
          <li
            className="list-group-item"
            style={{
              borderRadius: "15px",
              backgroundColor: props.mode === "dark" ? "#42424F" : "white",
            }}
          >
            <Link
              className="link"
              to="https://takeuforward.org/data-structure/sum-of-digits-of-a-number/"
              target="_blank"
              rel="noreferrer"
              style={{ color: props.mode === "dark" ? "#ffc007" : "#669cd9" }}
            >
              Sum of digits of a number
            </Link>
          </li>
          <li
            className="list-group-item"
            style={{
              borderRadius: "15px",
              backgroundColor: props.mode === "dark" ? "#42424F" : "white",
            }}
          >
            <Link
              className="link"
              to="https://takeuforward.org/data-structure/find-the-sum-of-numbers-in-the-given-range/"
              target="_blank"
              rel="noreferrer"
              style={{ color: props.mode === "dark" ? "#ffc007" : "#669cd9" }}
            >
              Sum of numbers in the given range
            </Link>
          </li>
          <li
            className="list-group-item"
            style={{
              borderRadius: "15px",
              backgroundColor: props.mode === "dark" ? "#42424F" : "white",
            }}
          >
            <Link
              className="link"
              to="https://takeuforward.org/data-structure/permutations-in-which-n-people-can-occupy-r-seats/"
              target="_blank"
              rel="noreferrer"
              style={{ color: props.mode === "dark" ? "#ffc007" : "#669cd9" }}
            >
              Permutations in which N people can occupy R seats in a classroom
            </Link>
          </li>
          <li
            className="list-group-item"
            style={{
              borderRadius: "15px",
              backgroundColor: props.mode === "dark" ? "#42424F" : "white",
            }}
          >
            <Link
              className="link"
              to="https://takeuforward.org/data-structure/program-to-add-two-fractions/"
              target="_blank"
              rel="noreferrer"
              style={{ color: props.mode === "dark" ? "#ffc007" : "#669cd9" }}
            >
              Program to add two fractions
            </Link>
          </li>
          <li
            className="list-group-item"
            style={{
              borderRadius: "15px",
              backgroundColor: props.mode === "dark" ? "#42424F" : "white",
            }}
          >
            <Link
              className="link"
              to="https://takeuforward.org/data-structure/replace-all-the-0s-with-1-in-a-given-integer/"
              target="_blank"
              rel="noreferrer"
              style={{ color: props.mode === "dark" ? "#ffc007" : "#669cd9" }}
            >
              Replace all 0s with 1s in a given integer
            </Link>
          </li>
          <li
            className="list-group-item"
            style={{
              borderRadius: "15px",
              backgroundColor: props.mode === "dark" ? "#42424F" : "white",
            }}
          >
            <Link
              className="link"
              to="https://takeuforward.org/data-structure/express-given-number-as-sum-of-two-prime-numbers/"
              target="_blank"
              rel="noreferrer"
              style={{ color: props.mode === "dark" ? "#ffc007" : "#669cd9" }}
            >
              Can a number be expressed as a sum of two prime numbers
            </Link>
          </li>
          <li
            className="list-group-item"
            style={{
              borderRadius: "15px",
              backgroundColor: props.mode === "dark" ? "#42424F" : "white",
            }}
          >
            <Link
              className="link"
              to="https://takeuforward.org/data-structure/calculate-the-area-of-the-circle/"
              target="_blank"
              rel="noreferrer"
              style={{ color: props.mode === "dark" ? "#ffc007" : "#669cd9" }}
            >
              Calculate the area of circle
            </Link>
          </li>
          <li
            className="list-group-item"
            style={{
              borderRadius: "15px",
              backgroundColor: props.mode === "dark" ? "#42424F" : "white",
            }}
          >
            <Link
              className="link"
              to="https://takeuforward.org/data-structure/program-to-find-roots-of-a-quadratic-equation/"
              target="_blank"
              rel="noreferrer"
              style={{ color: props.mode === "dark" ? "#ffc007" : "#669cd9" }}
            >
              Program to find roots of a Quadratic Equation
            </Link>
          </li>
        </ul>
      </div>
      <br />
      <div className="container my-3 text-start">
        <h2 style={{ color: props.mode === "dark" ? "white" : "black" }}>
          Problems on Number System
        </h2>
        <br />
        <ul className="list-group">
          <li
            className="list-group-item"
            style={{
              borderRadius: "15px",
              backgroundColor: props.mode === "dark" ? "#42424F" : "white",
            }}
          >
            <Link
              className="link"
              to="https://takeuforward.org/data-structure/convert-binary-to-decimal/"
              target="_blank"
              rel="noreferrer"
              style={{ color: props.mode === "dark" ? "#ffc007" : "#669cd9" }}
            >
              Convert Binary to Decimal
            </Link>
          </li>
          <li
            className="list-group-item"
            style={{
              borderRadius: "15px",
              backgroundColor: props.mode === "dark" ? "#42424F" : "white",
            }}
          >
            <Link
              className="link"
              to="https://takeuforward.org/data-structure/convert-binary-to-octal/"
              target="_blank"
              rel="noreferrer"
              style={{ color: props.mode === "dark" ? "#ffc007" : "#669cd9" }}
            >
              Convert binary to octal
            </Link>
          </li>
          <li
            className="list-group-item"
            style={{
              borderRadius: "15px",
              backgroundColor: props.mode === "dark" ? "#42424F" : "white",
            }}
          >
            <Link
              className="link"
              to="https://takeuforward.org/maths/convert-decimal-to-binary-number/"
              target="_blank"
              rel="noreferrer"
              style={{ color: props.mode === "dark" ? "#ffc007" : "#669cd9" }}
            >
              Decimal to Binary conversion
            </Link>
          </li>
          <li
            className="list-group-item"
            style={{
              borderRadius: "15px",
              backgroundColor: props.mode === "dark" ? "#42424F" : "white",
            }}
          >
            <Link
              className="link"
              to="https://takeuforward.org/uncategorized/convert-decimal-to-octal/"
              target="_blank"
              rel="noreferrer"
              style={{ color: props.mode === "dark" ? "#ffc007" : "#669cd9" }}
            >
              Convert decimal to octal
            </Link>
          </li>
          <li
            className="list-group-item"
            style={{
              borderRadius: "15px",
              backgroundColor: props.mode === "dark" ? "#42424F" : "white",
            }}
          >
            <Link
              className="link"
              to="https://takeuforward.org/data-structure/convert-octal-to-binary/"
              target="_blank"
              rel="noreferrer"
              style={{ color: props.mode === "dark" ? "#ffc007" : "#669cd9" }}
            >
              Convert octal to binary
            </Link>
          </li>
          <li
            className="list-group-item"
            style={{
              borderRadius: "15px",
              backgroundColor: props.mode === "dark" ? "#42424F" : "white",
            }}
          >
            <Link
              className="link"
              to="https://takeuforward.org/data-structure/convert-octal-to-decimal/"
              target="_blank"
              rel="noreferrer"
              style={{ color: props.mode === "dark" ? "#ffc007" : "#669cd9" }}
            >
              Convert octal to decimal
            </Link>
          </li>
          <li
            className="list-group-item"
            style={{
              borderRadius: "15px",
              backgroundColor: props.mode === "dark" ? "#42424F" : "white",
            }}
          >
            <Link
              className="link"
              to="https://takeuforward.org/data-structure/convert-digits-numbers-to-words/"
              target="_blank"
              rel="noreferrer"
              style={{ color: props.mode === "dark" ? "#ffc007" : "#669cd9" }}
            >
              Convert digits/numbers to words
            </Link>
          </li>
        </ul>
      </div>
      <br />
      <div className="container my-3 text-start">
        <h2 style={{ color: props.mode === "dark" ? "white" : "black" }}>
          Problems on Sorting
        </h2>
        <br />
        <ul className="list-group">
          <li
            className="list-group-item"
            style={{
              borderRadius: "15px",
              backgroundColor: props.mode === "dark" ? "#42424F" : "white",
            }}
          >
            <Link
              className="link"
              to="https://takeuforward.org/data-structure/bubble-sort-algorithm/"
              target="_blank"
              rel="noreferrer"
              style={{ color: props.mode === "dark" ? "#ffc007" : "#669cd9" }}
            >
              Bubble Sort Algorithm
            </Link>
          </li>
          <li
            className="list-group-item"
            style={{
              borderRadius: "15px",
              backgroundColor: props.mode === "dark" ? "#42424F" : "white",
            }}
          >
            <Link
              className="link"
              to="https://takeuforward.org/sorting/selection-sort-algorithm/"
              target="_blank"
              rel="noreferrer"
              style={{ color: props.mode === "dark" ? "#ffc007" : "#669cd9" }}
            >
              Selection Sort Algorithm
            </Link>
          </li>
          <li
            className="list-group-item"
            style={{
              borderRadius: "15px",
              backgroundColor: props.mode === "dark" ? "#42424F" : "white",
            }}
          >
            <Link
              className="link"
              to="https://takeuforward.org/data-structure/insertion-sort-algorithm/"
              target="_blank"
              rel="noreferrer"
              style={{ color: props.mode === "dark" ? "#ffc007" : "#669cd9" }}
            >
              Insertion Sort Algorithm
            </Link>
          </li>
          <li
            className="list-group-item"
            style={{
              borderRadius: "15px",
              backgroundColor: props.mode === "dark" ? "#42424F" : "white",
            }}
          >
            <Link
              className="link"
              to="https://takeuforward.org/data-structure/quick-sort-algorithm/"
              target="_blank"
              rel="noreferrer"
              style={{ color: props.mode === "dark" ? "#ffc007" : "#669cd9" }}
            >
              Quick Sort Algorithm
            </Link>
          </li>
          <li
            className="list-group-item"
            style={{
              borderRadius: "15px",
              backgroundColor: props.mode === "dark" ? "#42424F" : "white",
            }}
          >
            <Link
              className="link"
              to="https://takeuforward.org/data-structure/merge-sort-algorithm/"
              target="_blank"
              rel="noreferrer"
              style={{ color: props.mode === "dark" ? "#ffc007" : "#669cd9" }}
            >
              Merge Sort Algorithm
            </Link>
          </li>
        </ul>
      </div>
      <br />
      <div className="container my-3 text-start">
        <h2 style={{ color: props.mode === "dark" ? "white" : "black" }}>
          Problems on String
        </h2>
        <br />
        <ul className="list-group">
          <li
            className="list-group-item"
            style={{
              borderRadius: "15px",
              backgroundColor: props.mode === "dark" ? "#42424F" : "white",
            }}
          >
            <Link
              className="link"
              to="https://takeuforward.org/data-structure/check-if-the-given-string-is-palindrome-or-not/"
              target="_blank"
              rel="noreferrer"
              style={{ color: props.mode === "dark" ? "#ffc007" : "#669cd9" }}
            >
              Check if a given string is palindrome or not
            </Link>
          </li>
          <li
            className="list-group-item"
            style={{
              borderRadius: "15px",
              backgroundColor: props.mode === "dark" ? "#42424F" : "white",
            }}
          >
            <Link
              className="link"
              to="https://takeuforward.org/data-structure/count-number-of-vowels-consonants-spaces-in-string/"
              target="_blank"
              rel="noreferrer"
              style={{ color: props.mode === "dark" ? "#ffc007" : "#669cd9" }}
            >
              Count number of vowels, consonants, spaces in String
            </Link>
          </li>
          <li
            className="list-group-item"
            style={{
              borderRadius: "15px",
              backgroundColor: props.mode === "dark" ? "#42424F" : "white",
            }}
          >
            <Link
              className="link"
              to="https://takeuforward.org/data-structure/find-the-ascii-value-of-a-character/"
              target="_blank"
              rel="noreferrer"
              style={{ color: props.mode === "dark" ? "#ffc007" : "#669cd9" }}
            >
              Find the ASCII value of a character
            </Link>
          </li>
          <li
            className="list-group-item"
            style={{
              borderRadius: "15px",
              backgroundColor: props.mode === "dark" ? "#42424F" : "white",
            }}
          >
            <Link
              className="link"
              to="https://takeuforward.org/data-structure/remove-all-vowels-from-the-string/"
              target="_blank"
              rel="noreferrer"
              style={{ color: props.mode === "dark" ? "#ffc007" : "#669cd9" }}
            >
              Remove all vowels from the string
            </Link>
          </li>
          <li
            className="list-group-item"
            style={{
              borderRadius: "15px",
              backgroundColor: props.mode === "dark" ? "#42424F" : "white",
            }}
          >
            <Link
              className="link"
              to="https://takeuforward.org/data-structure/remove-spaces-from-a-string/"
              target="_blank"
              rel="noreferrer"
              style={{ color: props.mode === "dark" ? "#ffc007" : "#669cd9" }}
            >
              Remove spaces from a string
            </Link>
          </li>
          <li
            className="list-group-item"
            style={{
              borderRadius: "15px",
              backgroundColor: props.mode === "dark" ? "#42424F" : "white",
            }}
          >
            <Link
              className="link"
              to="https://takeuforward.org/data-structure/remove-characters-from-a-string-except-alphabets/"
              target="_blank"
              rel="noreferrer"
              style={{ color: props.mode === "dark" ? "#ffc007" : "#669cd9" }}
            >
              Remove characters from a string except alphabets
            </Link>
          </li>
          <li
            className="list-group-item"
            style={{
              borderRadius: "15px",
              backgroundColor: props.mode === "dark" ? "#42424F" : "white",
            }}
          >
            <Link
              className="link"
              to="https://takeuforward.org/data-structure/reverse-a-string/"
              target="_blank"
              rel="noreferrer"
              style={{ color: props.mode === "dark" ? "#ffc007" : "#669cd9" }}
            >
              Reverse a String
            </Link>
          </li>
          <li
            className="list-group-item"
            style={{
              borderRadius: "15px",
              backgroundColor: props.mode === "dark" ? "#42424F" : "white",
            }}
          >
            <Link
              className="link"
              to="https://takeuforward.org/data-structure/remove-brackets-from-an-algebraic-expression/"
              target="_blank"
              rel="noreferrer"
              style={{ color: props.mode === "dark" ? "#ffc007" : "#669cd9" }}
            >
              Remove brackets from an algebraic expression
            </Link>
          </li>
          <li
            className="list-group-item"
            style={{
              borderRadius: "15px",
              backgroundColor: props.mode === "dark" ? "#42424F" : "white",
            }}
          >
            <Link
              className="link"
              to="https://takeuforward.org/data-structure/sum-of-the-numbers-in-a-string/"
              target="_blank"
              rel="noreferrer"
              style={{ color: props.mode === "dark" ? "#ffc007" : "#669cd9" }}
            >
              Sum of the numbers in a String
            </Link>
          </li>
          <li
            className="list-group-item"
            style={{
              borderRadius: "15px",
              backgroundColor: props.mode === "dark" ? "#42424F" : "white",
            }}
          >
            <Link
              className="link"
              to="https://takeuforward.org/string/capitalize-first-and-last-character-of-each-word-of-a-string/"
              target="_blank"
              rel="noreferrer"
              style={{ color: props.mode === "dark" ? "#ffc007" : "#669cd9" }}
            >
              Capitalize first and last character of each word
            </Link>
          </li>
          <li
            className="list-group-item"
            style={{
              borderRadius: "15px",
              backgroundColor: props.mode === "dark" ? "#42424F" : "white",
            }}
          >
            <Link
              className="link"
              to="https://takeuforward.org/data-structure/calculate-frequency-of-characters-in-a-string/"
              target="_blank"
              rel="noreferrer"
              style={{ color: props.mode === "dark" ? "#ffc007" : "#669cd9" }}
            >
              Calculate frequency of characters in a string
            </Link>
          </li>
          <li
            className="list-group-item"
            style={{
              borderRadius: "15px",
              backgroundColor: props.mode === "dark" ? "#42424F" : "white",
            }}
          >
            <Link
              className="link"
              to="https://takeuforward.org/data-structure/find-non-repeating-characters-of-a-string/"
              target="_blank"
              rel="noreferrer"
              style={{ color: props.mode === "dark" ? "#ffc007" : "#669cd9" }}
            >
              Find Non-repeating characters of a String
            </Link>
          </li>
          <li
            className="list-group-item"
            style={{
              borderRadius: "15px",
              backgroundColor: props.mode === "dark" ? "#42424F" : "white",
            }}
          >
            <Link
              className="link"
              to="https://takeuforward.org/data-structure/check-if-two-strings-are-anagrams-of-each-other/"
              target="_blank"
              rel="noreferrer"
              style={{ color: props.mode === "dark" ? "#ffc007" : "#669cd9" }}
            >
              Check if two strings are anagram of each other
            </Link>
          </li>
          <li
            className="list-group-item"
            style={{
              borderRadius: "15px",
              backgroundColor: props.mode === "dark" ? "#42424F" : "white",
            }}
          >
            <Link
              className="link"
              to="/"
              target="_blank"
              rel="noreferrer"
              style={{ color: props.mode === "dark" ? "#ffc007" : "#669cd9" }}
            >
              Count common sub-sequence in two strings
            </Link>
          </li>
          <li
            className="list-group-item"
            style={{
              borderRadius: "15px",
              backgroundColor: props.mode === "dark" ? "#42424F" : "white",
            }}
          >
            <Link
              className="link"
              to="/"
              target="_blank"
              rel="noreferrer"
              style={{ color: props.mode === "dark" ? "#ffc007" : "#669cd9" }}
            >
              Check if two strings match where one string contains wildcard
              characters
            </Link>
          </li>
          <li
            className="list-group-item"
            style={{
              borderRadius: "15px",
              backgroundColor: props.mode === "dark" ? "#42424F" : "white",
            }}
          >
            <Link
              className="link"
              to="https://takeuforward.org/data-structure/maximum-occurring-character-in-a-string/"
              target="_blank"
              rel="noreferrer"
              style={{ color: props.mode === "dark" ? "#ffc007" : "#669cd9" }}
            >
              Return maximum occurring character in the input string
            </Link>
          </li>
          <li
            className="list-group-item"
            style={{
              borderRadius: "15px",
              backgroundColor: props.mode === "dark" ? "#42424F" : "white",
            }}
          >
            <Link
              className="link"
              to="https://takeuforward.org/data-structure/remove-all-duplicates-from-a-string/"
              target="_blank"
              rel="noreferrer"
              style={{ color: props.mode === "dark" ? "#ffc007" : "#669cd9" }}
            >
              Remove all duplicates from the input string
            </Link>
          </li>
          <li
            className="list-group-item"
            style={{
              borderRadius: "15px",
              backgroundColor: props.mode === "dark" ? "#42424F" : "white",
            }}
          >
            <Link
              className="link"
              to="https://takeuforward.org/data-structure/print-all-the-duplicates-in-the-string/"
              target="_blank"
              rel="noreferrer"
              style={{ color: props.mode === "dark" ? "#ffc007" : "#669cd9" }}
            >
              Print all the duplicates in the input string
            </Link>
          </li>
          <li
            className="list-group-item"
            style={{
              borderRadius: "15px",
              backgroundColor: props.mode === "dark" ? "#42424F" : "white",
            }}
          >
            <Link
              className="link"
              to="https://takeuforward.org/data-structure/remove-characters-from-first-string-present-in-the-second-string/"
              target="_blank"
              rel="noreferrer"
              style={{ color: props.mode === "dark" ? "#ffc007" : "#669cd9" }}
            >
              Remove characters from first string present in the second string
            </Link>
          </li>
          <li
            className="list-group-item"
            style={{
              borderRadius: "15px",
              backgroundColor: props.mode === "dark" ? "#42424F" : "white",
            }}
          >
            <Link
              className="link"
              to="https://takeuforward.org/data-structure/change-every-letter-with-next-lexicographic-alphabet/"
              target="_blank"
              rel="noreferrer"
              style={{ color: props.mode === "dark" ? "#ffc007" : "#669cd9" }}
            >
              Change every letter with the next lexicographic alphabet in the
              given string
            </Link>
          </li>
          <li
            className="list-group-item"
            style={{
              borderRadius: "15px",
              backgroundColor: props.mode === "dark" ? "#42424F" : "white",
            }}
          >
            <Link
              className="link"
              to="https://takeuforward.org/data-structure/find-the-largest-word-in-a-string/"
              target="_blank"
              rel="noreferrer"
              style={{ color: props.mode === "dark" ? "#ffc007" : "#669cd9" }}
            >
              Write a program to find the largest word in a given string
            </Link>
          </li>
          <li
            className="list-group-item"
            style={{
              borderRadius: "15px",
              backgroundColor: props.mode === "dark" ? "#42424F" : "white",
            }}
          >
            <Link
              className="link"
              to="https://takeuforward.org/data-structure/write-a-program-to-sort-characters-in-a-string/"
              target="_blank"
              rel="noreferrer"
              style={{ color: props.mode === "dark" ? "#ffc007" : "#669cd9" }}
            >
              Write a program to sort characters in a string
            </Link>
          </li>
          <li
            className="list-group-item"
            style={{
              borderRadius: "15px",
              backgroundColor: props.mode === "dark" ? "#42424F" : "white",
            }}
          >
            <Link
              className="link"
              to="https://takeuforward.org/data-structure/count-the-number-of-words-in-a-given-string/"
              target="_blank"
              rel="noreferrer"
              style={{ color: props.mode === "dark" ? "#ffc007" : "#669cd9" }}
            >
              Count number of words in a given string
            </Link>
          </li>
          <li
            className="list-group-item"
            style={{
              borderRadius: "15px",
              backgroundColor: props.mode === "dark" ? "#42424F" : "white",
            }}
          >
            <Link
              className="link"
              to="https://takeuforward.org/data-structure/find-word-with-highest-number-of-repeated-letters-in-string/"
              target="_blank"
              rel="noreferrer"
              style={{ color: props.mode === "dark" ? "#ffc007" : "#669cd9" }}
            >
              Write a program to find a word in a given string which has the
              highest number of repeated letters
            </Link>
          </li>
          <li
            className="list-group-item"
            style={{
              borderRadius: "15px",
              backgroundColor: props.mode === "dark" ? "#42424F" : "white",
            }}
          >
            <Link
              className="link"
              to="https://takeuforward.org/data-structure/change-case-of-each-character-in-a-string/"
              target="_blank"
              rel="noreferrer"
              style={{ color: props.mode === "dark" ? "#ffc007" : "#669cd9" }}
            >
              Change case of each character in a string
            </Link>
          </li>
          <li
            className="list-group-item"
            style={{
              borderRadius: "15px",
              backgroundColor: props.mode === "dark" ? "#42424F" : "white",
            }}
          >
            <Link
              className="link"
              to="https://takeuforward.org/data-structure/concatenate-one-string-to-another/"
              target="_blank"
              rel="noreferrer"
              style={{ color: props.mode === "dark" ? "#ffc007" : "#669cd9" }}
            >
              Concatenate one string to another
            </Link>
          </li>
          <li
            className="list-group-item"
            style={{
              borderRadius: "15px",
              backgroundColor: props.mode === "dark" ? "#42424F" : "white",
            }}
          >
            <Link
              className="link"
              to="https://takeuforward.org/data-structure/find-the-position-of-a-substring-within-a-string/"
              target="_blank"
              rel="noreferrer"
              style={{ color: props.mode === "dark" ? "#ffc007" : "#669cd9" }}
            >
              Write a program to find a substring within a string. If found
              display its starting position
            </Link>
          </li>
          <li
            className="list-group-item"
            style={{
              borderRadius: "15px",
              backgroundColor: props.mode === "dark" ? "#42424F" : "white",
            }}
          >
            <Link
              className="link"
              to="https://takeuforward.org/data-structure/reverse-words-in-a-string/"
              target="_blank"
              rel="noreferrer"
              style={{ color: props.mode === "dark" ? "#ffc007" : "#669cd9" }}
            >
              Reverse words in a string
            </Link>
          </li>
        </ul>
      </div>
      <div className="container text-start mb-5">
        <p
          className={`h5 ${
            props.mode === "dark" ? "text-light" : "text-muted"
          }`}
        >
          <br />
          <b style={{ color: props.mode === "dark" ? "#ffc007" : "#cf2d2d" }}>
            Tip :{" "}
          </b>{" "}
          All of the above links contains detailed tutorials to each and every
          coding problem, we recommend solving these questions on your own
          before jumping to the solutions.
        </p>
      </div>
      <div className="container mt-3 mb-5 text-start">
        <h2 style={{ color: props.mode === "dark" ? "white" : "black" }}>
          Prepare for more such Service Based Companies like Wipro, Infosys, etc
        </h2>
        <br />
        <ul className="list-group">
          <li
            className="list-group-item"
            style={{
              borderRadius: "15px",
              backgroundColor: props.mode === "dark" ? "#42424F" : "white",
            }}
          >
            <Link
              className="link"
              to="https://www.geeksforgeeks.org/wipro-sde-sheet-interview-questions-and-answers/#CP"
              target="_blank"
              rel="noreferrer"
              style={{ color: props.mode === "dark" ? "#ffc007" : "#669cd9" }}
            >
              Wipro Guide
            </Link>
          </li>
          <li
            className="list-group-item"
            style={{
              borderRadius: "15px",
              backgroundColor: props.mode === "dark" ? "#42424F" : "white",
            }}
          >
            <Link
              className="link"
              to="https://www.geeksforgeeks.org/infosys-sde-sheet-interview-questions-and-answers/#DSA"
              target="_blank"
              rel="noreferrer"
              style={{ color: props.mode === "dark" ? "#ffc007" : "#669cd9" }}
            >
              Infosys Guide
            </Link>
          </li>
          <li
            className="list-group-item"
            style={{
              borderRadius: "15px",
              backgroundColor: props.mode === "dark" ? "#42424F" : "white",
            }}
          >
            <Link
              className="link"
              to="https://www.geeksforgeeks.org/tcs-sde-sheet-interview-questions-and-answers/"
              target="_blank"
              rel="noreferrer"
              style={{ color: props.mode === "dark" ? "#ffc007" : "#669cd9" }}
            >
              GFG TCS Preparation Guide
            </Link>
          </li>
          <li
            className="list-group-item"
            style={{
              borderRadius: "15px",
              backgroundColor: props.mode === "dark" ? "#42424F" : "white",
            }}
          >
            <Link
              className="link"
              to="https://www.geeksforgeeks.org/cognizant-sde-sheet-interview-questions-and-answers/#CS"
              target="_blank"
              rel="noreferrer"
              style={{ color: props.mode === "dark" ? "#ffc007" : "#669cd9" }}
            >
              Cognizant Guide
            </Link>
          </li>
          <li
            className="list-group-item"
            style={{
              borderRadius: "15px",
              backgroundColor: props.mode === "dark" ? "#42424F" : "white",
            }}
          >
            <Link
              className="link"
              to="https://www.geeksforgeeks.org/hcl-sde-sheet-interview-questions-and-answers/#CP"
              target="_blank"
              rel="noreferrer"
              style={{ color: props.mode === "dark" ? "#ffc007" : "#669cd9" }}
            >
              HCL Guide
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TcsNqtPrep;
