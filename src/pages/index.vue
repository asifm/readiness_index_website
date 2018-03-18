<template lang="pug">
    q-page
        q-toolbar.shadow-6.bg-primary
            big.q-ma-lg Entrepreneurial Readiness Index
        q-page
            div.row
                div.col-6.offset-3
                    q-card.shadow-3.q-ma-lg
                        q-card-media.q-ma-none.q-pa-none
                            img(src="~assets/img/virginia_map.jpg")
                        q-card-title.bg-amber-8
                            p Measuring the Entrepreneurial Readiness of the Census Tracts in Virginia
                        q-card-main.q-pa-md.relative-position
                            q-tree(color="red" :nodes="indicators" node-key="label").q-ma-lg
                            div.col-2.absolute-right
                                q-card.shadow-0.text-right.q-ma-md
                                    q-card-title.q-pb-none
                                        small Download
                                            q-icon(name="fa-download").q-ml-md
                                    q-card-main.q-mt-md
                                        p
                                            a(href="statics/data/Virginia_Entrepreneurial_Readiness_Index_3.7.18.xlsx"
                                                size="md") Index (3.7.18)
                                        p
                                            a(href="statics/data/Visualization_Entrepreneurial_Readiness_Index_3.5.18.xlsx"
                                                size="md") Visualization (3.5.18)
</template>

<style>

</style>

<script>
export default {
    name: 'PageIndex',
    data() {
        return {
            indicators: [
                {
                    label: 'Financial Capital',
                    icon: 'mdi-bank',
                    children: [
                        { label: 'Number of CDFIs within 10 miles' },
                        {
                            label:
                                'Number of commercial banking establishments (county)',
                        },
                        { label: 'Number of VC firms within 10 miles' },
                    ],
                },
                {
                    label: 'Human Capital',
                    icon: 'mdi-human',
                    children: [
                        { label: 'Have High School Diploma (%)' },
                        { label: "Have Bachelor's Degree (%)" },
                        { label: 'Have Doctorate Degree (%)' },
                        {
                            label:
                                'Moved in From Outside of County in Past Year (%)',
                        },
                    ],
                },
                {
                    label: 'Industrial Base',
                    icon: 'mdi-factory',
                    children: [
                        {
                            label:
                                'Number of Fortune 1000 companies within 10 miles',
                        },
                        {
                            label:
                                'Location quotient for advanced industries (county)',
                        },
                        {
                            label:
                                'Local competitiveness effect (county job growth)',
                        },
                        {
                            label:
                                'Growth (%) in number of establishments since 2009 in county',
                        },
                    ],
                },
                {
                    label: 'Research and Development',
                    icon: 'mdi-flask',
                    children: [
                        {
                            label:
                                'Number of federal R&D facillities within 10 miles',
                        },
                        {
                            label:
                                'Mean distance to VA research (R1, R2) universities (miles)',
                        },
                        { label: 'Number of research parks within 10 miles' },
                    ],
                },
                {
                    label: 'Support and Incentives',
                    icon: 'mdi-thumb-up-outline',
                    children: [
                        { label: 'Major Business Facility Job Tax Credit' },
                        { label: 'In a HUBZone' },
                        {
                            label:
                                'Number of Small Business Development Centers within 10 miles',
                        },
                        {
                            label:
                                'Number of incubators/accelerators/entrepreneurship centers within 5 miles',
                        },
                    ],
                },
                {
                    label: 'Physical Infrastructure',
                    icon: 'mdi-road-variant',
                    children: [
                        {
                            label:
                                'Number of co-working facilities within 5 miles',
                        },
                        { label: 'Driving hours to port (Newport News)' },
                        {
                            label:
                                'Number of commercial airports within 20 miles',
                        },
                        { label: 'Available commercial properties (sqft)' },
                        { label: 'Driving hours to Washington, DC' },
                    ],
                },
                {
                    label: 'Quality of Life',
                    icon: 'mdi-glass-tulip',
                    children: [
                        { label: 'Cost of living index (county)' },
                        { label: 'Inequality (Gini index)' },
                        { label: 'Has a hospital within 10 miles' },
                        {
                            label:
                                'Number of breweries and wineries within 10 miles',
                        },
                        {
                            label:
                                'Number of major sports venues within 10 miles',
                        },
                        { label: 'Number of public schools' },
                        { label: 'Number of colleges within 10 miles' },
                    ],
                },
            ],
        };
    },
};
</script>

<style scoped>
.q-tree {
    line-height: 1.3em;
}
</style>
