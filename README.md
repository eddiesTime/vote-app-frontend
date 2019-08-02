# vote-app

# TODOS

### Election Vue
1. Create Card for elections
   * [Date-Picker](https://vuetifyjs.com/en/components/date-pickers) for expireDate
   * [TextField](https://vuetifyjs.com/en/components/text-fields) for ElectionName
   * Combobox with autocomplete and chips for Candidates
2. List all elections
3. Delete elections

### District Vue
1. Create Candidate Card
   * [Autocomplete](https://vuetifyjs.com/en/components/autocompletes) for Country
   * [Autocomplete](https://vuetifyjs.com/en/components/autocompletes) for City
   * [TextField](https://vuetifyjs.com/en/components/text-fields) for DistrictName
2. List all districts
3. Edit and delete district

### Candidate Vue
1. Create Candidate Card
   * [TextField](https://vuetifyjs.com/en/components/text-fields) for FirstName
   * [TextField](https://vuetifyjs.com/en/components/text-fields) for LastName
   * [Image](https://vuetifyjs.com/en/components/images) with hover and factsheet for Faction
   * [TextField](https://vuetifyjs.com/en/components/text-fields) with [Image Preview](https://vuetifyjs.com/en/components/images) for imageUrl
2. List to display all candidates
3. Implement way to edit and delete candidates

### Vote Vue
1. Display elections
2. Display candidates
3. Select candidate
4. vote for candidate
5. Display results (if voted)


### Admin Vue
* Authorization and Protection of Admin routes
* predefine what a user and what an admin should see


### Registration Vue
1. generate Voter Login


### Login Vue
1. Login
2. New Password
3. Logout

### Faction Vue
* create form input for faction


## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
