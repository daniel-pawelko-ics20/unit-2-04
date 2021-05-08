// Copyright (c) 2021 Daniel Pawelko All rights reserved
//
// Created by: Daniel Pawelko
// Created on: May 2021
// This file contains GO program that calculates area and perimeter with user input

package main

import "fmt"

// Defining main function
func main() {
	// Defining variables
	var length int
	var width int

	fmt.Println("This program calculates area and perimeter of a rectangle")
	fmt.Println()

	// User Input
	fmt.Println("Enter the length(mm): ")
	fmt.Scanln(&length)

	fmt.Println("Enter the width(mm): ")
	fmt.Scanln(&width)

	// Outputing calculations
	fmt.Println("\nThe area is:", length*width, "mm².")
	fmt.Println("The perimeter is:", 2*(length+width), "mm.")
	fmt.Println("\nDone :)")
}
