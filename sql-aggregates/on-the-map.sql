select "countries"."name",
count(*) as "cities"
from "cities"
join "countries" using ("countryId")
group by "countries"."name";
